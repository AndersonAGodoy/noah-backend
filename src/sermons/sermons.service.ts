import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SermonsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSermonDto: CreateSermonDto) {
    return await this.prisma.sermon.create({
      data: {
        title: createSermonDto.title,
        description: createSermonDto.description,
        speaker: createSermonDto.speaker,
        duration: createSermonDto.duration,
        date: createSermonDto.date,
        time: createSermonDto.time,
        eventType: createSermonDto.eventType,
        published: false,
        references: {
          create: (createSermonDto.references ?? []).map((reference) => ({
            reference: reference.reference,
            text: reference.text,
          })),
        },
        contentSections: {
          create: (createSermonDto.contentSections ?? []).map(
            (contentSection) => ({
              type: contentSection.type,
              content: contentSection.content,
            }),
          ),
        },
      },
    });
  }

  throwNotFoundExeption() {
    throw new NotFoundException('Sermão não encontrado');
  }

  async findAll({
    cursor,
    limit,
    eventType,
  }: {
    cursor?: string;
    limit: number;
    eventType?: string | string[];
  }) {
    const take = limit;

    const whereClause = {
      ...(eventType
        ? Array.isArray(eventType)
          ? { eventType: { in: eventType } }
          : { eventType }
        : {}),
    };

    const queryOptions: any = {
      where: whereClause,
      take: take + 1,
      include: {
        references: true,
        contentSections: true,
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
    };

    if (cursor) {
      queryOptions.cursor = { id: cursor };
      queryOptions.skip = 1;
    }

    const sermons = await this.prisma.sermon.findMany(queryOptions);

    const hasNextPage = sermons.length > take;
    const items = sermons.slice(0, take);
    const nextCursor = hasNextPage ? items[items.length - 1].id : null;

    return {
      items,
      nextCursor,
    };
  }

  async findOne(id: string) {
    const sermon = await this.prisma.sermon.findUnique({
      where: {
        id,
      },
      include: {
        references: true,
        contentSections: true,
      },
    });

    if (!sermon) {
      return this.throwNotFoundExeption();
    }
    return sermon;
  }

  async update(id: string, updateSermonDto: UpdateSermonDto) {
    const sermonToUpdate = await this.prisma.sermon.findUnique({
      where: {
        id,
      },
    });
    if (!sermonToUpdate) {
      return this.throwNotFoundExeption();
    }
    // Atualiza os dados principais do sermão
    const updatedSermon = await this.prisma.sermon.update({
      where: { id },
      data: {
        title: updateSermonDto.title,
        description: updateSermonDto.description,
        speaker: updateSermonDto.speaker,
        duration: updateSermonDto.duration,
        date: updateSermonDto.date,
        time: updateSermonDto.time,
        eventType: updateSermonDto.eventType,
        published: updateSermonDto.published,
      },
    });

    // === REFERENCES ===

    const incomingReferenceIds =
      updateSermonDto.references?.filter((r) => r.id).map((r) => r.id) ?? [];

    // Deleta as referências que foram removidas
    await this.prisma.reference.deleteMany({
      where: {
        sermonId: id,
        id: { notIn: incomingReferenceIds },
      },
    });

    // Atualiza ou cria referências
    for (const ref of updateSermonDto.references ?? []) {
      if (ref.id) {
        await this.prisma.reference.update({
          where: { id: ref.id },
          data: {
            reference: ref.reference,
            text: ref.text,
          },
        });
      } else {
        await this.prisma.reference.create({
          data: {
            reference: ref.reference,
            text: ref.text,
            sermonId: id,
          },
        });
      }
    }

    // === CONTENT SECTIONS ===

    const incomingContentSectionIds =
      updateSermonDto.contentSections?.filter((s) => s.id).map((s) => s.id) ??
      [];

    // Deleta os blocos de conteúdo que foram removidos
    await this.prisma.contentSection.deleteMany({
      where: {
        sermonId: id,
        id: { notIn: incomingContentSectionIds },
      },
    });

    // Atualiza ou cria blocos de conteúdo
    for (const section of updateSermonDto.contentSections ?? []) {
      if (section.id) {
        await this.prisma.contentSection.update({
          where: { id: section.id },
          data: {
            type: section.type,
            content: section.content,
          },
        });
      } else {
        await this.prisma.contentSection.create({
          data: {
            type: section.type,
            content: section.content,
            sermonId: id,
          },
        });
      }
    }

    return updatedSermon;
  }

  async publish(id: string) {
    const sermon = await this.prisma.sermon.findUnique({
      where: {
        id,
      },
    });
    if (!sermon) {
      return this.throwNotFoundExeption();
    }
    const updatedSermon = await this.prisma.sermon.update({
      where: {
        id,
      },
      data: {
        published: true,
      },
    });

    return updatedSermon;
  }

  async remove(id: string) {
    const sermonToDelete = await this.prisma.sermon.findUnique({
      where: {
        id,
      },
    });

    if (!sermonToDelete) {
      return this.throwNotFoundExeption();
    }
    return this.prisma.sermon.delete({
      where: {
        id,
      },
    });
  }
}
