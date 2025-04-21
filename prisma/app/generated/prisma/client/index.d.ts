
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sermon
 * 
 */
export type Sermon = $Result.DefaultSelection<Prisma.$SermonPayload>
/**
 * Model Reference
 * 
 */
export type Reference = $Result.DefaultSelection<Prisma.$ReferencePayload>
/**
 * Model ContentSection
 * 
 */
export type ContentSection = $Result.DefaultSelection<Prisma.$ContentSectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContentType: {
  parágrafo: 'parágrafo',
  header: 'header',
  citação: 'citação'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]

}

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sermon`: Exposes CRUD operations for the **Sermon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sermons
    * const sermons = await prisma.sermon.findMany()
    * ```
    */
  get sermon(): Prisma.SermonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reference`: Exposes CRUD operations for the **Reference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more References
    * const references = await prisma.reference.findMany()
    * ```
    */
  get reference(): Prisma.ReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentSection`: Exposes CRUD operations for the **ContentSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentSections
    * const contentSections = await prisma.contentSection.findMany()
    * ```
    */
  get contentSection(): Prisma.ContentSectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sermon: 'Sermon',
    Reference: 'Reference',
    ContentSection: 'ContentSection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sermon" | "reference" | "contentSection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sermon: {
        payload: Prisma.$SermonPayload<ExtArgs>
        fields: Prisma.SermonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SermonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SermonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          findFirst: {
            args: Prisma.SermonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SermonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          findMany: {
            args: Prisma.SermonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          create: {
            args: Prisma.SermonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          createMany: {
            args: Prisma.SermonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SermonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          delete: {
            args: Prisma.SermonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          update: {
            args: Prisma.SermonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          deleteMany: {
            args: Prisma.SermonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SermonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SermonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>[]
          }
          upsert: {
            args: Prisma.SermonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SermonPayload>
          }
          aggregate: {
            args: Prisma.SermonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSermon>
          }
          groupBy: {
            args: Prisma.SermonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SermonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SermonCountArgs<ExtArgs>
            result: $Utils.Optional<SermonCountAggregateOutputType> | number
          }
        }
      }
      Reference: {
        payload: Prisma.$ReferencePayload<ExtArgs>
        fields: Prisma.ReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findFirst: {
            args: Prisma.ReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findMany: {
            args: Prisma.ReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          create: {
            args: Prisma.ReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          createMany: {
            args: Prisma.ReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          delete: {
            args: Prisma.ReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          update: {
            args: Prisma.ReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          deleteMany: {
            args: Prisma.ReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          upsert: {
            args: Prisma.ReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          aggregate: {
            args: Prisma.ReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReference>
          }
          groupBy: {
            args: Prisma.ReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceCountAggregateOutputType> | number
          }
        }
      }
      ContentSection: {
        payload: Prisma.$ContentSectionPayload<ExtArgs>
        fields: Prisma.ContentSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          findFirst: {
            args: Prisma.ContentSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          findMany: {
            args: Prisma.ContentSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          create: {
            args: Prisma.ContentSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          createMany: {
            args: Prisma.ContentSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          delete: {
            args: Prisma.ContentSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          update: {
            args: Prisma.ContentSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          deleteMany: {
            args: Prisma.ContentSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          upsert: {
            args: Prisma.ContentSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          aggregate: {
            args: Prisma.ContentSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentSection>
          }
          groupBy: {
            args: Prisma.ContentSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ContentSectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sermon?: SermonOmit
    reference?: ReferenceOmit
    contentSection?: ContentSectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SermonCountOutputType
   */

  export type SermonCountOutputType = {
    references: number
    contentSections: number
  }

  export type SermonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    references?: boolean | SermonCountOutputTypeCountReferencesArgs
    contentSections?: boolean | SermonCountOutputTypeCountContentSectionsArgs
  }

  // Custom InputTypes
  /**
   * SermonCountOutputType without action
   */
  export type SermonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SermonCountOutputType
     */
    select?: SermonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SermonCountOutputType without action
   */
  export type SermonCountOutputTypeCountReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
  }

  /**
   * SermonCountOutputType without action
   */
  export type SermonCountOutputTypeCountContentSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Sermon
   */

  export type AggregateSermon = {
    _count: SermonCountAggregateOutputType | null
    _min: SermonMinAggregateOutputType | null
    _max: SermonMaxAggregateOutputType | null
  }

  export type SermonMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    speaker: string | null
    duration: string | null
    date: string | null
    time: string | null
    eventType: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SermonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    speaker: string | null
    duration: string | null
    date: string | null
    time: string | null
    eventType: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SermonCountAggregateOutputType = {
    id: number
    title: number
    description: number
    speaker: number
    duration: number
    date: number
    time: number
    eventType: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SermonMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    speaker?: true
    duration?: true
    date?: true
    time?: true
    eventType?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SermonMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    speaker?: true
    duration?: true
    date?: true
    time?: true
    eventType?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SermonCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    speaker?: true
    duration?: true
    date?: true
    time?: true
    eventType?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SermonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sermon to aggregate.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sermons
    **/
    _count?: true | SermonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SermonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SermonMaxAggregateInputType
  }

  export type GetSermonAggregateType<T extends SermonAggregateArgs> = {
        [P in keyof T & keyof AggregateSermon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSermon[P]>
      : GetScalarType<T[P], AggregateSermon[P]>
  }




  export type SermonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SermonWhereInput
    orderBy?: SermonOrderByWithAggregationInput | SermonOrderByWithAggregationInput[]
    by: SermonScalarFieldEnum[] | SermonScalarFieldEnum
    having?: SermonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SermonCountAggregateInputType | true
    _min?: SermonMinAggregateInputType
    _max?: SermonMaxAggregateInputType
  }

  export type SermonGroupByOutputType = {
    id: string
    title: string
    description: string
    speaker: string
    duration: string
    date: string
    time: string
    eventType: string
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: SermonCountAggregateOutputType | null
    _min: SermonMinAggregateOutputType | null
    _max: SermonMaxAggregateOutputType | null
  }

  type GetSermonGroupByPayload<T extends SermonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SermonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SermonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SermonGroupByOutputType[P]>
            : GetScalarType<T[P], SermonGroupByOutputType[P]>
        }
      >
    >


  export type SermonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    duration?: boolean
    date?: boolean
    time?: boolean
    eventType?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    references?: boolean | Sermon$referencesArgs<ExtArgs>
    contentSections?: boolean | Sermon$contentSectionsArgs<ExtArgs>
    _count?: boolean | SermonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    duration?: boolean
    date?: boolean
    time?: boolean
    eventType?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    duration?: boolean
    date?: boolean
    time?: boolean
    eventType?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sermon"]>

  export type SermonSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    duration?: boolean
    date?: boolean
    time?: boolean
    eventType?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SermonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "speaker" | "duration" | "date" | "time" | "eventType" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["sermon"]>
  export type SermonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    references?: boolean | Sermon$referencesArgs<ExtArgs>
    contentSections?: boolean | Sermon$contentSectionsArgs<ExtArgs>
    _count?: boolean | SermonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SermonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SermonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SermonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sermon"
    objects: {
      references: Prisma.$ReferencePayload<ExtArgs>[]
      contentSections: Prisma.$ContentSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      speaker: string
      duration: string
      date: string
      time: string
      eventType: string
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sermon"]>
    composites: {}
  }

  type SermonGetPayload<S extends boolean | null | undefined | SermonDefaultArgs> = $Result.GetResult<Prisma.$SermonPayload, S>

  type SermonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SermonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SermonCountAggregateInputType | true
    }

  export interface SermonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sermon'], meta: { name: 'Sermon' } }
    /**
     * Find zero or one Sermon that matches the filter.
     * @param {SermonFindUniqueArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SermonFindUniqueArgs>(args: SelectSubset<T, SermonFindUniqueArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sermon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SermonFindUniqueOrThrowArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SermonFindUniqueOrThrowArgs>(args: SelectSubset<T, SermonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sermon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindFirstArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SermonFindFirstArgs>(args?: SelectSubset<T, SermonFindFirstArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sermon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindFirstOrThrowArgs} args - Arguments to find a Sermon
     * @example
     * // Get one Sermon
     * const sermon = await prisma.sermon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SermonFindFirstOrThrowArgs>(args?: SelectSubset<T, SermonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sermons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sermons
     * const sermons = await prisma.sermon.findMany()
     * 
     * // Get first 10 Sermons
     * const sermons = await prisma.sermon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sermonWithIdOnly = await prisma.sermon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SermonFindManyArgs>(args?: SelectSubset<T, SermonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sermon.
     * @param {SermonCreateArgs} args - Arguments to create a Sermon.
     * @example
     * // Create one Sermon
     * const Sermon = await prisma.sermon.create({
     *   data: {
     *     // ... data to create a Sermon
     *   }
     * })
     * 
     */
    create<T extends SermonCreateArgs>(args: SelectSubset<T, SermonCreateArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sermons.
     * @param {SermonCreateManyArgs} args - Arguments to create many Sermons.
     * @example
     * // Create many Sermons
     * const sermon = await prisma.sermon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SermonCreateManyArgs>(args?: SelectSubset<T, SermonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sermons and returns the data saved in the database.
     * @param {SermonCreateManyAndReturnArgs} args - Arguments to create many Sermons.
     * @example
     * // Create many Sermons
     * const sermon = await prisma.sermon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sermons and only return the `id`
     * const sermonWithIdOnly = await prisma.sermon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SermonCreateManyAndReturnArgs>(args?: SelectSubset<T, SermonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sermon.
     * @param {SermonDeleteArgs} args - Arguments to delete one Sermon.
     * @example
     * // Delete one Sermon
     * const Sermon = await prisma.sermon.delete({
     *   where: {
     *     // ... filter to delete one Sermon
     *   }
     * })
     * 
     */
    delete<T extends SermonDeleteArgs>(args: SelectSubset<T, SermonDeleteArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sermon.
     * @param {SermonUpdateArgs} args - Arguments to update one Sermon.
     * @example
     * // Update one Sermon
     * const sermon = await prisma.sermon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SermonUpdateArgs>(args: SelectSubset<T, SermonUpdateArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sermons.
     * @param {SermonDeleteManyArgs} args - Arguments to filter Sermons to delete.
     * @example
     * // Delete a few Sermons
     * const { count } = await prisma.sermon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SermonDeleteManyArgs>(args?: SelectSubset<T, SermonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sermons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sermons
     * const sermon = await prisma.sermon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SermonUpdateManyArgs>(args: SelectSubset<T, SermonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sermons and returns the data updated in the database.
     * @param {SermonUpdateManyAndReturnArgs} args - Arguments to update many Sermons.
     * @example
     * // Update many Sermons
     * const sermon = await prisma.sermon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sermons and only return the `id`
     * const sermonWithIdOnly = await prisma.sermon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SermonUpdateManyAndReturnArgs>(args: SelectSubset<T, SermonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sermon.
     * @param {SermonUpsertArgs} args - Arguments to update or create a Sermon.
     * @example
     * // Update or create a Sermon
     * const sermon = await prisma.sermon.upsert({
     *   create: {
     *     // ... data to create a Sermon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sermon we want to update
     *   }
     * })
     */
    upsert<T extends SermonUpsertArgs>(args: SelectSubset<T, SermonUpsertArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sermons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonCountArgs} args - Arguments to filter Sermons to count.
     * @example
     * // Count the number of Sermons
     * const count = await prisma.sermon.count({
     *   where: {
     *     // ... the filter for the Sermons we want to count
     *   }
     * })
    **/
    count<T extends SermonCountArgs>(
      args?: Subset<T, SermonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SermonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sermon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SermonAggregateArgs>(args: Subset<T, SermonAggregateArgs>): Prisma.PrismaPromise<GetSermonAggregateType<T>>

    /**
     * Group by Sermon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SermonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SermonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SermonGroupByArgs['orderBy'] }
        : { orderBy?: SermonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SermonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSermonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sermon model
   */
  readonly fields: SermonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sermon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SermonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    references<T extends Sermon$referencesArgs<ExtArgs> = {}>(args?: Subset<T, Sermon$referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentSections<T extends Sermon$contentSectionsArgs<ExtArgs> = {}>(args?: Subset<T, Sermon$contentSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sermon model
   */
  interface SermonFieldRefs {
    readonly id: FieldRef<"Sermon", 'String'>
    readonly title: FieldRef<"Sermon", 'String'>
    readonly description: FieldRef<"Sermon", 'String'>
    readonly speaker: FieldRef<"Sermon", 'String'>
    readonly duration: FieldRef<"Sermon", 'String'>
    readonly date: FieldRef<"Sermon", 'String'>
    readonly time: FieldRef<"Sermon", 'String'>
    readonly eventType: FieldRef<"Sermon", 'String'>
    readonly published: FieldRef<"Sermon", 'Boolean'>
    readonly createdAt: FieldRef<"Sermon", 'DateTime'>
    readonly updatedAt: FieldRef<"Sermon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sermon findUnique
   */
  export type SermonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon findUniqueOrThrow
   */
  export type SermonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon findFirst
   */
  export type SermonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sermons.
     */
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon findFirstOrThrow
   */
  export type SermonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermon to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sermons.
     */
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon findMany
   */
  export type SermonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter, which Sermons to fetch.
     */
    where?: SermonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sermons to fetch.
     */
    orderBy?: SermonOrderByWithRelationInput | SermonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sermons.
     */
    cursor?: SermonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sermons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sermons.
     */
    skip?: number
    distinct?: SermonScalarFieldEnum | SermonScalarFieldEnum[]
  }

  /**
   * Sermon create
   */
  export type SermonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The data needed to create a Sermon.
     */
    data: XOR<SermonCreateInput, SermonUncheckedCreateInput>
  }

  /**
   * Sermon createMany
   */
  export type SermonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sermons.
     */
    data: SermonCreateManyInput | SermonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sermon createManyAndReturn
   */
  export type SermonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * The data used to create many Sermons.
     */
    data: SermonCreateManyInput | SermonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sermon update
   */
  export type SermonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The data needed to update a Sermon.
     */
    data: XOR<SermonUpdateInput, SermonUncheckedUpdateInput>
    /**
     * Choose, which Sermon to update.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon updateMany
   */
  export type SermonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sermons.
     */
    data: XOR<SermonUpdateManyMutationInput, SermonUncheckedUpdateManyInput>
    /**
     * Filter which Sermons to update
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to update.
     */
    limit?: number
  }

  /**
   * Sermon updateManyAndReturn
   */
  export type SermonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * The data used to update Sermons.
     */
    data: XOR<SermonUpdateManyMutationInput, SermonUncheckedUpdateManyInput>
    /**
     * Filter which Sermons to update
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to update.
     */
    limit?: number
  }

  /**
   * Sermon upsert
   */
  export type SermonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * The filter to search for the Sermon to update in case it exists.
     */
    where: SermonWhereUniqueInput
    /**
     * In case the Sermon found by the `where` argument doesn't exist, create a new Sermon with this data.
     */
    create: XOR<SermonCreateInput, SermonUncheckedCreateInput>
    /**
     * In case the Sermon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SermonUpdateInput, SermonUncheckedUpdateInput>
  }

  /**
   * Sermon delete
   */
  export type SermonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
    /**
     * Filter which Sermon to delete.
     */
    where: SermonWhereUniqueInput
  }

  /**
   * Sermon deleteMany
   */
  export type SermonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sermons to delete
     */
    where?: SermonWhereInput
    /**
     * Limit how many Sermons to delete.
     */
    limit?: number
  }

  /**
   * Sermon.references
   */
  export type Sermon$referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    cursor?: ReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Sermon.contentSections
   */
  export type Sermon$contentSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    where?: ContentSectionWhereInput
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    cursor?: ContentSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * Sermon without action
   */
  export type SermonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sermon
     */
    select?: SermonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sermon
     */
    omit?: SermonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SermonInclude<ExtArgs> | null
  }


  /**
   * Model Reference
   */

  export type AggregateReference = {
    _count: ReferenceCountAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  export type ReferenceMinAggregateOutputType = {
    id: string | null
    reference: string | null
    text: string | null
    sermonId: string | null
  }

  export type ReferenceMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    text: string | null
    sermonId: string | null
  }

  export type ReferenceCountAggregateOutputType = {
    id: number
    reference: number
    text: number
    sermonId: number
    _all: number
  }


  export type ReferenceMinAggregateInputType = {
    id?: true
    reference?: true
    text?: true
    sermonId?: true
  }

  export type ReferenceMaxAggregateInputType = {
    id?: true
    reference?: true
    text?: true
    sermonId?: true
  }

  export type ReferenceCountAggregateInputType = {
    id?: true
    reference?: true
    text?: true
    sermonId?: true
    _all?: true
  }

  export type ReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reference to aggregate.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned References
    **/
    _count?: true | ReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceMaxAggregateInputType
  }

  export type GetReferenceAggregateType<T extends ReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReference[P]>
      : GetScalarType<T[P], AggregateReference[P]>
  }




  export type ReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithAggregationInput | ReferenceOrderByWithAggregationInput[]
    by: ReferenceScalarFieldEnum[] | ReferenceScalarFieldEnum
    having?: ReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceCountAggregateInputType | true
    _min?: ReferenceMinAggregateInputType
    _max?: ReferenceMaxAggregateInputType
  }

  export type ReferenceGroupByOutputType = {
    id: string
    reference: string
    text: string
    sermonId: string
    _count: ReferenceCountAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  type GetReferenceGroupByPayload<T extends ReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
        }
      >
    >


  export type ReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    text?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    text?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    text?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectScalar = {
    id?: boolean
    reference?: boolean
    text?: boolean
    sermonId?: boolean
  }

  export type ReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "text" | "sermonId", ExtArgs["result"]["reference"]>
  export type ReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }

  export type $ReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reference"
    objects: {
      sermon: Prisma.$SermonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      text: string
      sermonId: string
    }, ExtArgs["result"]["reference"]>
    composites: {}
  }

  type ReferenceGetPayload<S extends boolean | null | undefined | ReferenceDefaultArgs> = $Result.GetResult<Prisma.$ReferencePayload, S>

  type ReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferenceCountAggregateInputType | true
    }

  export interface ReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reference'], meta: { name: 'Reference' } }
    /**
     * Find zero or one Reference that matches the filter.
     * @param {ReferenceFindUniqueArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferenceFindUniqueArgs>(args: SelectSubset<T, ReferenceFindUniqueArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferenceFindUniqueOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferenceFindFirstArgs>(args?: SelectSubset<T, ReferenceFindFirstArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all References
     * const references = await prisma.reference.findMany()
     * 
     * // Get first 10 References
     * const references = await prisma.reference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceWithIdOnly = await prisma.reference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferenceFindManyArgs>(args?: SelectSubset<T, ReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reference.
     * @param {ReferenceCreateArgs} args - Arguments to create a Reference.
     * @example
     * // Create one Reference
     * const Reference = await prisma.reference.create({
     *   data: {
     *     // ... data to create a Reference
     *   }
     * })
     * 
     */
    create<T extends ReferenceCreateArgs>(args: SelectSubset<T, ReferenceCreateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many References.
     * @param {ReferenceCreateManyArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferenceCreateManyArgs>(args?: SelectSubset<T, ReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many References and returns the data saved in the database.
     * @param {ReferenceCreateManyAndReturnArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reference.
     * @param {ReferenceDeleteArgs} args - Arguments to delete one Reference.
     * @example
     * // Delete one Reference
     * const Reference = await prisma.reference.delete({
     *   where: {
     *     // ... filter to delete one Reference
     *   }
     * })
     * 
     */
    delete<T extends ReferenceDeleteArgs>(args: SelectSubset<T, ReferenceDeleteArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reference.
     * @param {ReferenceUpdateArgs} args - Arguments to update one Reference.
     * @example
     * // Update one Reference
     * const reference = await prisma.reference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferenceUpdateArgs>(args: SelectSubset<T, ReferenceUpdateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more References.
     * @param {ReferenceDeleteManyArgs} args - Arguments to filter References to delete.
     * @example
     * // Delete a few References
     * const { count } = await prisma.reference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferenceDeleteManyArgs>(args?: SelectSubset<T, ReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferenceUpdateManyArgs>(args: SelectSubset<T, ReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References and returns the data updated in the database.
     * @param {ReferenceUpdateManyAndReturnArgs} args - Arguments to update many References.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reference.
     * @param {ReferenceUpsertArgs} args - Arguments to update or create a Reference.
     * @example
     * // Update or create a Reference
     * const reference = await prisma.reference.upsert({
     *   create: {
     *     // ... data to create a Reference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reference we want to update
     *   }
     * })
     */
    upsert<T extends ReferenceUpsertArgs>(args: SelectSubset<T, ReferenceUpsertArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceCountArgs} args - Arguments to filter References to count.
     * @example
     * // Count the number of References
     * const count = await prisma.reference.count({
     *   where: {
     *     // ... the filter for the References we want to count
     *   }
     * })
    **/
    count<T extends ReferenceCountArgs>(
      args?: Subset<T, ReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferenceAggregateArgs>(args: Subset<T, ReferenceAggregateArgs>): Prisma.PrismaPromise<GetReferenceAggregateType<T>>

    /**
     * Group by Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferenceGroupByArgs['orderBy'] }
        : { orderBy?: ReferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reference model
   */
  readonly fields: ReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sermon<T extends SermonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SermonDefaultArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reference model
   */
  interface ReferenceFieldRefs {
    readonly id: FieldRef<"Reference", 'String'>
    readonly reference: FieldRef<"Reference", 'String'>
    readonly text: FieldRef<"Reference", 'String'>
    readonly sermonId: FieldRef<"Reference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reference findUnique
   */
  export type ReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findUniqueOrThrow
   */
  export type ReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findFirst
   */
  export type ReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findFirstOrThrow
   */
  export type ReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findMany
   */
  export type ReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference create
   */
  export type ReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Reference.
     */
    data: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
  }

  /**
   * Reference createMany
   */
  export type ReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reference createManyAndReturn
   */
  export type ReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference update
   */
  export type ReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Reference.
     */
    data: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
    /**
     * Choose, which Reference to update.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference updateMany
   */
  export type ReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
  }

  /**
   * Reference updateManyAndReturn
   */
  export type ReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference upsert
   */
  export type ReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Reference to update in case it exists.
     */
    where: ReferenceWhereUniqueInput
    /**
     * In case the Reference found by the `where` argument doesn't exist, create a new Reference with this data.
     */
    create: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
    /**
     * In case the Reference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
  }

  /**
   * Reference delete
   */
  export type ReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter which Reference to delete.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference deleteMany
   */
  export type ReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which References to delete
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to delete.
     */
    limit?: number
  }

  /**
   * Reference without action
   */
  export type ReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
  }


  /**
   * Model ContentSection
   */

  export type AggregateContentSection = {
    _count: ContentSectionCountAggregateOutputType | null
    _min: ContentSectionMinAggregateOutputType | null
    _max: ContentSectionMaxAggregateOutputType | null
  }

  export type ContentSectionMinAggregateOutputType = {
    id: string | null
    type: $Enums.ContentType | null
    content: string | null
    sermonId: string | null
  }

  export type ContentSectionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ContentType | null
    content: string | null
    sermonId: string | null
  }

  export type ContentSectionCountAggregateOutputType = {
    id: number
    type: number
    content: number
    sermonId: number
    _all: number
  }


  export type ContentSectionMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sermonId?: true
  }

  export type ContentSectionMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sermonId?: true
  }

  export type ContentSectionCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    sermonId?: true
    _all?: true
  }

  export type ContentSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSection to aggregate.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentSections
    **/
    _count?: true | ContentSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentSectionMaxAggregateInputType
  }

  export type GetContentSectionAggregateType<T extends ContentSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateContentSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentSection[P]>
      : GetScalarType<T[P], AggregateContentSection[P]>
  }




  export type ContentSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSectionWhereInput
    orderBy?: ContentSectionOrderByWithAggregationInput | ContentSectionOrderByWithAggregationInput[]
    by: ContentSectionScalarFieldEnum[] | ContentSectionScalarFieldEnum
    having?: ContentSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentSectionCountAggregateInputType | true
    _min?: ContentSectionMinAggregateInputType
    _max?: ContentSectionMaxAggregateInputType
  }

  export type ContentSectionGroupByOutputType = {
    id: string
    type: $Enums.ContentType
    content: string
    sermonId: string
    _count: ContentSectionCountAggregateOutputType | null
    _min: ContentSectionMinAggregateOutputType | null
    _max: ContentSectionMaxAggregateOutputType | null
  }

  type GetContentSectionGroupByPayload<T extends ContentSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ContentSectionGroupByOutputType[P]>
        }
      >
    >


  export type ContentSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    sermonId?: boolean
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    sermonId?: boolean
  }

  export type ContentSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "sermonId", ExtArgs["result"]["contentSection"]>
  export type ContentSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }
  export type ContentSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }
  export type ContentSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sermon?: boolean | SermonDefaultArgs<ExtArgs>
  }

  export type $ContentSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentSection"
    objects: {
      sermon: Prisma.$SermonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ContentType
      content: string
      sermonId: string
    }, ExtArgs["result"]["contentSection"]>
    composites: {}
  }

  type ContentSectionGetPayload<S extends boolean | null | undefined | ContentSectionDefaultArgs> = $Result.GetResult<Prisma.$ContentSectionPayload, S>

  type ContentSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentSectionCountAggregateInputType | true
    }

  export interface ContentSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentSection'], meta: { name: 'ContentSection' } }
    /**
     * Find zero or one ContentSection that matches the filter.
     * @param {ContentSectionFindUniqueArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentSectionFindUniqueArgs>(args: SelectSubset<T, ContentSectionFindUniqueArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentSectionFindUniqueOrThrowArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindFirstArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentSectionFindFirstArgs>(args?: SelectSubset<T, ContentSectionFindFirstArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindFirstOrThrowArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentSections
     * const contentSections = await prisma.contentSection.findMany()
     * 
     * // Get first 10 ContentSections
     * const contentSections = await prisma.contentSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentSectionFindManyArgs>(args?: SelectSubset<T, ContentSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentSection.
     * @param {ContentSectionCreateArgs} args - Arguments to create a ContentSection.
     * @example
     * // Create one ContentSection
     * const ContentSection = await prisma.contentSection.create({
     *   data: {
     *     // ... data to create a ContentSection
     *   }
     * })
     * 
     */
    create<T extends ContentSectionCreateArgs>(args: SelectSubset<T, ContentSectionCreateArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentSections.
     * @param {ContentSectionCreateManyArgs} args - Arguments to create many ContentSections.
     * @example
     * // Create many ContentSections
     * const contentSection = await prisma.contentSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentSectionCreateManyArgs>(args?: SelectSubset<T, ContentSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentSections and returns the data saved in the database.
     * @param {ContentSectionCreateManyAndReturnArgs} args - Arguments to create many ContentSections.
     * @example
     * // Create many ContentSections
     * const contentSection = await prisma.contentSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentSections and only return the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentSection.
     * @param {ContentSectionDeleteArgs} args - Arguments to delete one ContentSection.
     * @example
     * // Delete one ContentSection
     * const ContentSection = await prisma.contentSection.delete({
     *   where: {
     *     // ... filter to delete one ContentSection
     *   }
     * })
     * 
     */
    delete<T extends ContentSectionDeleteArgs>(args: SelectSubset<T, ContentSectionDeleteArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentSection.
     * @param {ContentSectionUpdateArgs} args - Arguments to update one ContentSection.
     * @example
     * // Update one ContentSection
     * const contentSection = await prisma.contentSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentSectionUpdateArgs>(args: SelectSubset<T, ContentSectionUpdateArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentSections.
     * @param {ContentSectionDeleteManyArgs} args - Arguments to filter ContentSections to delete.
     * @example
     * // Delete a few ContentSections
     * const { count } = await prisma.contentSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentSectionDeleteManyArgs>(args?: SelectSubset<T, ContentSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentSections
     * const contentSection = await prisma.contentSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentSectionUpdateManyArgs>(args: SelectSubset<T, ContentSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSections and returns the data updated in the database.
     * @param {ContentSectionUpdateManyAndReturnArgs} args - Arguments to update many ContentSections.
     * @example
     * // Update many ContentSections
     * const contentSection = await prisma.contentSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentSections and only return the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentSection.
     * @param {ContentSectionUpsertArgs} args - Arguments to update or create a ContentSection.
     * @example
     * // Update or create a ContentSection
     * const contentSection = await prisma.contentSection.upsert({
     *   create: {
     *     // ... data to create a ContentSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentSection we want to update
     *   }
     * })
     */
    upsert<T extends ContentSectionUpsertArgs>(args: SelectSubset<T, ContentSectionUpsertArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionCountArgs} args - Arguments to filter ContentSections to count.
     * @example
     * // Count the number of ContentSections
     * const count = await prisma.contentSection.count({
     *   where: {
     *     // ... the filter for the ContentSections we want to count
     *   }
     * })
    **/
    count<T extends ContentSectionCountArgs>(
      args?: Subset<T, ContentSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentSectionAggregateArgs>(args: Subset<T, ContentSectionAggregateArgs>): Prisma.PrismaPromise<GetContentSectionAggregateType<T>>

    /**
     * Group by ContentSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentSectionGroupByArgs['orderBy'] }
        : { orderBy?: ContentSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentSection model
   */
  readonly fields: ContentSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sermon<T extends SermonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SermonDefaultArgs<ExtArgs>>): Prisma__SermonClient<$Result.GetResult<Prisma.$SermonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentSection model
   */
  interface ContentSectionFieldRefs {
    readonly id: FieldRef<"ContentSection", 'String'>
    readonly type: FieldRef<"ContentSection", 'ContentType'>
    readonly content: FieldRef<"ContentSection", 'String'>
    readonly sermonId: FieldRef<"ContentSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContentSection findUnique
   */
  export type ContentSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection findUniqueOrThrow
   */
  export type ContentSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection findFirst
   */
  export type ContentSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSections.
     */
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection findFirstOrThrow
   */
  export type ContentSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSections.
     */
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection findMany
   */
  export type ContentSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSections to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection create
   */
  export type ContentSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentSection.
     */
    data: XOR<ContentSectionCreateInput, ContentSectionUncheckedCreateInput>
  }

  /**
   * ContentSection createMany
   */
  export type ContentSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentSections.
     */
    data: ContentSectionCreateManyInput | ContentSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentSection createManyAndReturn
   */
  export type ContentSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ContentSections.
     */
    data: ContentSectionCreateManyInput | ContentSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSection update
   */
  export type ContentSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentSection.
     */
    data: XOR<ContentSectionUpdateInput, ContentSectionUncheckedUpdateInput>
    /**
     * Choose, which ContentSection to update.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection updateMany
   */
  export type ContentSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentSections.
     */
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyInput>
    /**
     * Filter which ContentSections to update
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to update.
     */
    limit?: number
  }

  /**
   * ContentSection updateManyAndReturn
   */
  export type ContentSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * The data used to update ContentSections.
     */
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyInput>
    /**
     * Filter which ContentSections to update
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSection upsert
   */
  export type ContentSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentSection to update in case it exists.
     */
    where: ContentSectionWhereUniqueInput
    /**
     * In case the ContentSection found by the `where` argument doesn't exist, create a new ContentSection with this data.
     */
    create: XOR<ContentSectionCreateInput, ContentSectionUncheckedCreateInput>
    /**
     * In case the ContentSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentSectionUpdateInput, ContentSectionUncheckedUpdateInput>
  }

  /**
   * ContentSection delete
   */
  export type ContentSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter which ContentSection to delete.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection deleteMany
   */
  export type ContentSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSections to delete
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to delete.
     */
    limit?: number
  }

  /**
   * ContentSection without action
   */
  export type ContentSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SermonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    speaker: 'speaker',
    duration: 'duration',
    date: 'date',
    time: 'time',
    eventType: 'eventType',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SermonScalarFieldEnum = (typeof SermonScalarFieldEnum)[keyof typeof SermonScalarFieldEnum]


  export const ReferenceScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    text: 'text',
    sermonId: 'sermonId'
  };

  export type ReferenceScalarFieldEnum = (typeof ReferenceScalarFieldEnum)[keyof typeof ReferenceScalarFieldEnum]


  export const ContentSectionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    sermonId: 'sermonId'
  };

  export type ContentSectionScalarFieldEnum = (typeof ContentSectionScalarFieldEnum)[keyof typeof ContentSectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SermonWhereInput = {
    AND?: SermonWhereInput | SermonWhereInput[]
    OR?: SermonWhereInput[]
    NOT?: SermonWhereInput | SermonWhereInput[]
    id?: StringFilter<"Sermon"> | string
    title?: StringFilter<"Sermon"> | string
    description?: StringFilter<"Sermon"> | string
    speaker?: StringFilter<"Sermon"> | string
    duration?: StringFilter<"Sermon"> | string
    date?: StringFilter<"Sermon"> | string
    time?: StringFilter<"Sermon"> | string
    eventType?: StringFilter<"Sermon"> | string
    published?: BoolFilter<"Sermon"> | boolean
    createdAt?: DateTimeFilter<"Sermon"> | Date | string
    updatedAt?: DateTimeFilter<"Sermon"> | Date | string
    references?: ReferenceListRelationFilter
    contentSections?: ContentSectionListRelationFilter
  }

  export type SermonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    time?: SortOrder
    eventType?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    references?: ReferenceOrderByRelationAggregateInput
    contentSections?: ContentSectionOrderByRelationAggregateInput
  }

  export type SermonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SermonWhereInput | SermonWhereInput[]
    OR?: SermonWhereInput[]
    NOT?: SermonWhereInput | SermonWhereInput[]
    title?: StringFilter<"Sermon"> | string
    description?: StringFilter<"Sermon"> | string
    speaker?: StringFilter<"Sermon"> | string
    duration?: StringFilter<"Sermon"> | string
    date?: StringFilter<"Sermon"> | string
    time?: StringFilter<"Sermon"> | string
    eventType?: StringFilter<"Sermon"> | string
    published?: BoolFilter<"Sermon"> | boolean
    createdAt?: DateTimeFilter<"Sermon"> | Date | string
    updatedAt?: DateTimeFilter<"Sermon"> | Date | string
    references?: ReferenceListRelationFilter
    contentSections?: ContentSectionListRelationFilter
  }, "id">

  export type SermonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    time?: SortOrder
    eventType?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SermonCountOrderByAggregateInput
    _max?: SermonMaxOrderByAggregateInput
    _min?: SermonMinOrderByAggregateInput
  }

  export type SermonScalarWhereWithAggregatesInput = {
    AND?: SermonScalarWhereWithAggregatesInput | SermonScalarWhereWithAggregatesInput[]
    OR?: SermonScalarWhereWithAggregatesInput[]
    NOT?: SermonScalarWhereWithAggregatesInput | SermonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sermon"> | string
    title?: StringWithAggregatesFilter<"Sermon"> | string
    description?: StringWithAggregatesFilter<"Sermon"> | string
    speaker?: StringWithAggregatesFilter<"Sermon"> | string
    duration?: StringWithAggregatesFilter<"Sermon"> | string
    date?: StringWithAggregatesFilter<"Sermon"> | string
    time?: StringWithAggregatesFilter<"Sermon"> | string
    eventType?: StringWithAggregatesFilter<"Sermon"> | string
    published?: BoolWithAggregatesFilter<"Sermon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sermon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sermon"> | Date | string
  }

  export type ReferenceWhereInput = {
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    id?: StringFilter<"Reference"> | string
    reference?: StringFilter<"Reference"> | string
    text?: StringFilter<"Reference"> | string
    sermonId?: StringFilter<"Reference"> | string
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
  }

  export type ReferenceOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    text?: SortOrder
    sermonId?: SortOrder
    sermon?: SermonOrderByWithRelationInput
  }

  export type ReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    reference?: StringFilter<"Reference"> | string
    text?: StringFilter<"Reference"> | string
    sermonId?: StringFilter<"Reference"> | string
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
  }, "id">

  export type ReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    text?: SortOrder
    sermonId?: SortOrder
    _count?: ReferenceCountOrderByAggregateInput
    _max?: ReferenceMaxOrderByAggregateInput
    _min?: ReferenceMinOrderByAggregateInput
  }

  export type ReferenceScalarWhereWithAggregatesInput = {
    AND?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    OR?: ReferenceScalarWhereWithAggregatesInput[]
    NOT?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reference"> | string
    reference?: StringWithAggregatesFilter<"Reference"> | string
    text?: StringWithAggregatesFilter<"Reference"> | string
    sermonId?: StringWithAggregatesFilter<"Reference"> | string
  }

  export type ContentSectionWhereInput = {
    AND?: ContentSectionWhereInput | ContentSectionWhereInput[]
    OR?: ContentSectionWhereInput[]
    NOT?: ContentSectionWhereInput | ContentSectionWhereInput[]
    id?: StringFilter<"ContentSection"> | string
    type?: EnumContentTypeFilter<"ContentSection"> | $Enums.ContentType
    content?: StringFilter<"ContentSection"> | string
    sermonId?: StringFilter<"ContentSection"> | string
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
  }

  export type ContentSectionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sermonId?: SortOrder
    sermon?: SermonOrderByWithRelationInput
  }

  export type ContentSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentSectionWhereInput | ContentSectionWhereInput[]
    OR?: ContentSectionWhereInput[]
    NOT?: ContentSectionWhereInput | ContentSectionWhereInput[]
    type?: EnumContentTypeFilter<"ContentSection"> | $Enums.ContentType
    content?: StringFilter<"ContentSection"> | string
    sermonId?: StringFilter<"ContentSection"> | string
    sermon?: XOR<SermonScalarRelationFilter, SermonWhereInput>
  }, "id">

  export type ContentSectionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sermonId?: SortOrder
    _count?: ContentSectionCountOrderByAggregateInput
    _max?: ContentSectionMaxOrderByAggregateInput
    _min?: ContentSectionMinOrderByAggregateInput
  }

  export type ContentSectionScalarWhereWithAggregatesInput = {
    AND?: ContentSectionScalarWhereWithAggregatesInput | ContentSectionScalarWhereWithAggregatesInput[]
    OR?: ContentSectionScalarWhereWithAggregatesInput[]
    NOT?: ContentSectionScalarWhereWithAggregatesInput | ContentSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentSection"> | string
    type?: EnumContentTypeWithAggregatesFilter<"ContentSection"> | $Enums.ContentType
    content?: StringWithAggregatesFilter<"ContentSection"> | string
    sermonId?: StringWithAggregatesFilter<"ContentSection"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SermonCreateInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceCreateNestedManyWithoutSermonInput
    contentSections?: ContentSectionCreateNestedManyWithoutSermonInput
  }

  export type SermonUncheckedCreateInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceUncheckedCreateNestedManyWithoutSermonInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutSermonInput
  }

  export type SermonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUpdateManyWithoutSermonNestedInput
    contentSections?: ContentSectionUpdateManyWithoutSermonNestedInput
  }

  export type SermonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUncheckedUpdateManyWithoutSermonNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutSermonNestedInput
  }

  export type SermonCreateManyInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SermonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SermonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceCreateInput = {
    id?: string
    reference: string
    text: string
    sermon: SermonCreateNestedOneWithoutReferencesInput
  }

  export type ReferenceUncheckedCreateInput = {
    id?: string
    reference: string
    text: string
    sermonId: string
  }

  export type ReferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sermon?: SermonUpdateOneRequiredWithoutReferencesNestedInput
  }

  export type ReferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sermonId?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceCreateManyInput = {
    id?: string
    reference: string
    text: string
    sermonId: string
  }

  export type ReferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sermonId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionCreateInput = {
    id?: string
    type: $Enums.ContentType
    content: string
    sermon: SermonCreateNestedOneWithoutContentSectionsInput
  }

  export type ContentSectionUncheckedCreateInput = {
    id?: string
    type: $Enums.ContentType
    content: string
    sermonId: string
  }

  export type ContentSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
    sermon?: SermonUpdateOneRequiredWithoutContentSectionsNestedInput
  }

  export type ContentSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
    sermonId?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionCreateManyInput = {
    id?: string
    type: $Enums.ContentType
    content: string
    sermonId: string
  }

  export type ContentSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
    sermonId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReferenceListRelationFilter = {
    every?: ReferenceWhereInput
    some?: ReferenceWhereInput
    none?: ReferenceWhereInput
  }

  export type ContentSectionListRelationFilter = {
    every?: ContentSectionWhereInput
    some?: ContentSectionWhereInput
    none?: ContentSectionWhereInput
  }

  export type ReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SermonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    time?: SortOrder
    eventType?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SermonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    time?: SortOrder
    eventType?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SermonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    duration?: SortOrder
    date?: SortOrder
    time?: SortOrder
    eventType?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SermonScalarRelationFilter = {
    is?: SermonWhereInput
    isNot?: SermonWhereInput
  }

  export type ReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    text?: SortOrder
    sermonId?: SortOrder
  }

  export type ReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    text?: SortOrder
    sermonId?: SortOrder
  }

  export type ReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    text?: SortOrder
    sermonId?: SortOrder
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type ContentSectionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sermonId?: SortOrder
  }

  export type ContentSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sermonId?: SortOrder
  }

  export type ContentSectionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    sermonId?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReferenceCreateNestedManyWithoutSermonInput = {
    create?: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput> | ReferenceCreateWithoutSermonInput[] | ReferenceUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSermonInput | ReferenceCreateOrConnectWithoutSermonInput[]
    createMany?: ReferenceCreateManySermonInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type ContentSectionCreateNestedManyWithoutSermonInput = {
    create?: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput> | ContentSectionCreateWithoutSermonInput[] | ContentSectionUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutSermonInput | ContentSectionCreateOrConnectWithoutSermonInput[]
    createMany?: ContentSectionCreateManySermonInputEnvelope
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
  }

  export type ReferenceUncheckedCreateNestedManyWithoutSermonInput = {
    create?: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput> | ReferenceCreateWithoutSermonInput[] | ReferenceUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSermonInput | ReferenceCreateOrConnectWithoutSermonInput[]
    createMany?: ReferenceCreateManySermonInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type ContentSectionUncheckedCreateNestedManyWithoutSermonInput = {
    create?: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput> | ContentSectionCreateWithoutSermonInput[] | ContentSectionUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutSermonInput | ContentSectionCreateOrConnectWithoutSermonInput[]
    createMany?: ContentSectionCreateManySermonInputEnvelope
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReferenceUpdateManyWithoutSermonNestedInput = {
    create?: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput> | ReferenceCreateWithoutSermonInput[] | ReferenceUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSermonInput | ReferenceCreateOrConnectWithoutSermonInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutSermonInput | ReferenceUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: ReferenceCreateManySermonInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutSermonInput | ReferenceUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutSermonInput | ReferenceUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type ContentSectionUpdateManyWithoutSermonNestedInput = {
    create?: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput> | ContentSectionCreateWithoutSermonInput[] | ContentSectionUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutSermonInput | ContentSectionCreateOrConnectWithoutSermonInput[]
    upsert?: ContentSectionUpsertWithWhereUniqueWithoutSermonInput | ContentSectionUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: ContentSectionCreateManySermonInputEnvelope
    set?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    disconnect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    delete?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    update?: ContentSectionUpdateWithWhereUniqueWithoutSermonInput | ContentSectionUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: ContentSectionUpdateManyWithWhereWithoutSermonInput | ContentSectionUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
  }

  export type ReferenceUncheckedUpdateManyWithoutSermonNestedInput = {
    create?: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput> | ReferenceCreateWithoutSermonInput[] | ReferenceUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSermonInput | ReferenceCreateOrConnectWithoutSermonInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutSermonInput | ReferenceUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: ReferenceCreateManySermonInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutSermonInput | ReferenceUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutSermonInput | ReferenceUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type ContentSectionUncheckedUpdateManyWithoutSermonNestedInput = {
    create?: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput> | ContentSectionCreateWithoutSermonInput[] | ContentSectionUncheckedCreateWithoutSermonInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutSermonInput | ContentSectionCreateOrConnectWithoutSermonInput[]
    upsert?: ContentSectionUpsertWithWhereUniqueWithoutSermonInput | ContentSectionUpsertWithWhereUniqueWithoutSermonInput[]
    createMany?: ContentSectionCreateManySermonInputEnvelope
    set?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    disconnect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    delete?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    update?: ContentSectionUpdateWithWhereUniqueWithoutSermonInput | ContentSectionUpdateWithWhereUniqueWithoutSermonInput[]
    updateMany?: ContentSectionUpdateManyWithWhereWithoutSermonInput | ContentSectionUpdateManyWithWhereWithoutSermonInput[]
    deleteMany?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
  }

  export type SermonCreateNestedOneWithoutReferencesInput = {
    create?: XOR<SermonCreateWithoutReferencesInput, SermonUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: SermonCreateOrConnectWithoutReferencesInput
    connect?: SermonWhereUniqueInput
  }

  export type SermonUpdateOneRequiredWithoutReferencesNestedInput = {
    create?: XOR<SermonCreateWithoutReferencesInput, SermonUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: SermonCreateOrConnectWithoutReferencesInput
    upsert?: SermonUpsertWithoutReferencesInput
    connect?: SermonWhereUniqueInput
    update?: XOR<XOR<SermonUpdateToOneWithWhereWithoutReferencesInput, SermonUpdateWithoutReferencesInput>, SermonUncheckedUpdateWithoutReferencesInput>
  }

  export type SermonCreateNestedOneWithoutContentSectionsInput = {
    create?: XOR<SermonCreateWithoutContentSectionsInput, SermonUncheckedCreateWithoutContentSectionsInput>
    connectOrCreate?: SermonCreateOrConnectWithoutContentSectionsInput
    connect?: SermonWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type SermonUpdateOneRequiredWithoutContentSectionsNestedInput = {
    create?: XOR<SermonCreateWithoutContentSectionsInput, SermonUncheckedCreateWithoutContentSectionsInput>
    connectOrCreate?: SermonCreateOrConnectWithoutContentSectionsInput
    upsert?: SermonUpsertWithoutContentSectionsInput
    connect?: SermonWhereUniqueInput
    update?: XOR<XOR<SermonUpdateToOneWithWhereWithoutContentSectionsInput, SermonUpdateWithoutContentSectionsInput>, SermonUncheckedUpdateWithoutContentSectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type ReferenceCreateWithoutSermonInput = {
    id?: string
    reference: string
    text: string
  }

  export type ReferenceUncheckedCreateWithoutSermonInput = {
    id?: string
    reference: string
    text: string
  }

  export type ReferenceCreateOrConnectWithoutSermonInput = {
    where: ReferenceWhereUniqueInput
    create: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput>
  }

  export type ReferenceCreateManySermonInputEnvelope = {
    data: ReferenceCreateManySermonInput | ReferenceCreateManySermonInput[]
    skipDuplicates?: boolean
  }

  export type ContentSectionCreateWithoutSermonInput = {
    id?: string
    type: $Enums.ContentType
    content: string
  }

  export type ContentSectionUncheckedCreateWithoutSermonInput = {
    id?: string
    type: $Enums.ContentType
    content: string
  }

  export type ContentSectionCreateOrConnectWithoutSermonInput = {
    where: ContentSectionWhereUniqueInput
    create: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput>
  }

  export type ContentSectionCreateManySermonInputEnvelope = {
    data: ContentSectionCreateManySermonInput | ContentSectionCreateManySermonInput[]
    skipDuplicates?: boolean
  }

  export type ReferenceUpsertWithWhereUniqueWithoutSermonInput = {
    where: ReferenceWhereUniqueInput
    update: XOR<ReferenceUpdateWithoutSermonInput, ReferenceUncheckedUpdateWithoutSermonInput>
    create: XOR<ReferenceCreateWithoutSermonInput, ReferenceUncheckedCreateWithoutSermonInput>
  }

  export type ReferenceUpdateWithWhereUniqueWithoutSermonInput = {
    where: ReferenceWhereUniqueInput
    data: XOR<ReferenceUpdateWithoutSermonInput, ReferenceUncheckedUpdateWithoutSermonInput>
  }

  export type ReferenceUpdateManyWithWhereWithoutSermonInput = {
    where: ReferenceScalarWhereInput
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyWithoutSermonInput>
  }

  export type ReferenceScalarWhereInput = {
    AND?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    OR?: ReferenceScalarWhereInput[]
    NOT?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    id?: StringFilter<"Reference"> | string
    reference?: StringFilter<"Reference"> | string
    text?: StringFilter<"Reference"> | string
    sermonId?: StringFilter<"Reference"> | string
  }

  export type ContentSectionUpsertWithWhereUniqueWithoutSermonInput = {
    where: ContentSectionWhereUniqueInput
    update: XOR<ContentSectionUpdateWithoutSermonInput, ContentSectionUncheckedUpdateWithoutSermonInput>
    create: XOR<ContentSectionCreateWithoutSermonInput, ContentSectionUncheckedCreateWithoutSermonInput>
  }

  export type ContentSectionUpdateWithWhereUniqueWithoutSermonInput = {
    where: ContentSectionWhereUniqueInput
    data: XOR<ContentSectionUpdateWithoutSermonInput, ContentSectionUncheckedUpdateWithoutSermonInput>
  }

  export type ContentSectionUpdateManyWithWhereWithoutSermonInput = {
    where: ContentSectionScalarWhereInput
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyWithoutSermonInput>
  }

  export type ContentSectionScalarWhereInput = {
    AND?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
    OR?: ContentSectionScalarWhereInput[]
    NOT?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
    id?: StringFilter<"ContentSection"> | string
    type?: EnumContentTypeFilter<"ContentSection"> | $Enums.ContentType
    content?: StringFilter<"ContentSection"> | string
    sermonId?: StringFilter<"ContentSection"> | string
  }

  export type SermonCreateWithoutReferencesInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentSections?: ContentSectionCreateNestedManyWithoutSermonInput
  }

  export type SermonUncheckedCreateWithoutReferencesInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutSermonInput
  }

  export type SermonCreateOrConnectWithoutReferencesInput = {
    where: SermonWhereUniqueInput
    create: XOR<SermonCreateWithoutReferencesInput, SermonUncheckedCreateWithoutReferencesInput>
  }

  export type SermonUpsertWithoutReferencesInput = {
    update: XOR<SermonUpdateWithoutReferencesInput, SermonUncheckedUpdateWithoutReferencesInput>
    create: XOR<SermonCreateWithoutReferencesInput, SermonUncheckedCreateWithoutReferencesInput>
    where?: SermonWhereInput
  }

  export type SermonUpdateToOneWithWhereWithoutReferencesInput = {
    where?: SermonWhereInput
    data: XOR<SermonUpdateWithoutReferencesInput, SermonUncheckedUpdateWithoutReferencesInput>
  }

  export type SermonUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentSections?: ContentSectionUpdateManyWithoutSermonNestedInput
  }

  export type SermonUncheckedUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentSections?: ContentSectionUncheckedUpdateManyWithoutSermonNestedInput
  }

  export type SermonCreateWithoutContentSectionsInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceCreateNestedManyWithoutSermonInput
  }

  export type SermonUncheckedCreateWithoutContentSectionsInput = {
    id?: string
    title: string
    description?: string
    speaker?: string
    duration?: string
    date?: string
    time?: string
    eventType?: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceUncheckedCreateNestedManyWithoutSermonInput
  }

  export type SermonCreateOrConnectWithoutContentSectionsInput = {
    where: SermonWhereUniqueInput
    create: XOR<SermonCreateWithoutContentSectionsInput, SermonUncheckedCreateWithoutContentSectionsInput>
  }

  export type SermonUpsertWithoutContentSectionsInput = {
    update: XOR<SermonUpdateWithoutContentSectionsInput, SermonUncheckedUpdateWithoutContentSectionsInput>
    create: XOR<SermonCreateWithoutContentSectionsInput, SermonUncheckedCreateWithoutContentSectionsInput>
    where?: SermonWhereInput
  }

  export type SermonUpdateToOneWithWhereWithoutContentSectionsInput = {
    where?: SermonWhereInput
    data: XOR<SermonUpdateWithoutContentSectionsInput, SermonUncheckedUpdateWithoutContentSectionsInput>
  }

  export type SermonUpdateWithoutContentSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUpdateManyWithoutSermonNestedInput
  }

  export type SermonUncheckedUpdateWithoutContentSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUncheckedUpdateManyWithoutSermonNestedInput
  }

  export type ReferenceCreateManySermonInput = {
    id?: string
    reference: string
    text: string
  }

  export type ContentSectionCreateManySermonInput = {
    id?: string
    type: $Enums.ContentType
    content: string
  }

  export type ReferenceUpdateWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionUpdateWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionUncheckedUpdateWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSectionUncheckedUpdateManyWithoutSermonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}