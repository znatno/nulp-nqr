
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Developer
 * 
 */
export type Developer = $Result.DefaultSelection<Prisma.$DeveloperPayload>
/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model ProfessionalQualification
 * 
 */
export type ProfessionalQualification = $Result.DefaultSelection<Prisma.$ProfessionalQualificationPayload>
/**
 * Model QualificationCenter
 * 
 */
export type QualificationCenter = $Result.DefaultSelection<Prisma.$QualificationCenterPayload>
/**
 * Model Accreditation
 * 
 */
export type Accreditation = $Result.DefaultSelection<Prisma.$AccreditationPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Expert
 * 
 */
export type Expert = $Result.DefaultSelection<Prisma.$ExpertPayload>
/**
 * Model Examination
 * 
 */
export type Examination = $Result.DefaultSelection<Prisma.$ExaminationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Developers
 * const developers = await prisma.developer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Developers
   * const developers = await prisma.developer.findMany()
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
   * `prisma.developer`: Exposes CRUD operations for the **Developer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developer.findMany()
    * ```
    */
  get developer(): Prisma.DeveloperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionalQualification`: Exposes CRUD operations for the **ProfessionalQualification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionalQualifications
    * const professionalQualifications = await prisma.professionalQualification.findMany()
    * ```
    */
  get professionalQualification(): Prisma.ProfessionalQualificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualificationCenter`: Exposes CRUD operations for the **QualificationCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualificationCenters
    * const qualificationCenters = await prisma.qualificationCenter.findMany()
    * ```
    */
  get qualificationCenter(): Prisma.QualificationCenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accreditation`: Exposes CRUD operations for the **Accreditation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accreditations
    * const accreditations = await prisma.accreditation.findMany()
    * ```
    */
  get accreditation(): Prisma.AccreditationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expert`: Exposes CRUD operations for the **Expert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experts
    * const experts = await prisma.expert.findMany()
    * ```
    */
  get expert(): Prisma.ExpertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examination`: Exposes CRUD operations for the **Examination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examinations
    * const examinations = await prisma.examination.findMany()
    * ```
    */
  get examination(): Prisma.ExaminationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Developer: 'Developer',
    Profession: 'Profession',
    ProfessionalQualification: 'ProfessionalQualification',
    QualificationCenter: 'QualificationCenter',
    Accreditation: 'Accreditation',
    Person: 'Person',
    Expert: 'Expert',
    Examination: 'Examination'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "developer" | "profession" | "professionalQualification" | "qualificationCenter" | "accreditation" | "person" | "expert" | "examination"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Developer: {
        payload: Prisma.$DeveloperPayload<ExtArgs>
        fields: Prisma.DeveloperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeveloperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeveloperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findFirst: {
            args: Prisma.DeveloperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeveloperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          findMany: {
            args: Prisma.DeveloperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          create: {
            args: Prisma.DeveloperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          createMany: {
            args: Prisma.DeveloperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeveloperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          delete: {
            args: Prisma.DeveloperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          update: {
            args: Prisma.DeveloperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          deleteMany: {
            args: Prisma.DeveloperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeveloperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeveloperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
          }
          upsert: {
            args: Prisma.DeveloperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
          }
          aggregate: {
            args: Prisma.DeveloperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeveloper>
          }
          groupBy: {
            args: Prisma.DeveloperGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeveloperGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeveloperCountArgs<ExtArgs>
            result: $Utils.Optional<DeveloperCountAggregateOutputType> | number
          }
        }
      }
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      ProfessionalQualification: {
        payload: Prisma.$ProfessionalQualificationPayload<ExtArgs>
        fields: Prisma.ProfessionalQualificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalQualificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalQualificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalQualificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalQualificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          findMany: {
            args: Prisma.ProfessionalQualificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>[]
          }
          create: {
            args: Prisma.ProfessionalQualificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          createMany: {
            args: Prisma.ProfessionalQualificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalQualificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalQualificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          update: {
            args: Prisma.ProfessionalQualificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalQualificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalQualificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalQualificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalQualificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalQualificationPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalQualificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionalQualification>
          }
          groupBy: {
            args: Prisma.ProfessionalQualificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalQualificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalQualificationCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalQualificationCountAggregateOutputType> | number
          }
        }
      }
      QualificationCenter: {
        payload: Prisma.$QualificationCenterPayload<ExtArgs>
        fields: Prisma.QualificationCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationCenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationCenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          findFirst: {
            args: Prisma.QualificationCenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationCenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          findMany: {
            args: Prisma.QualificationCenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>[]
          }
          create: {
            args: Prisma.QualificationCenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          createMany: {
            args: Prisma.QualificationCenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualificationCenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>[]
          }
          delete: {
            args: Prisma.QualificationCenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          update: {
            args: Prisma.QualificationCenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          deleteMany: {
            args: Prisma.QualificationCenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationCenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualificationCenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>[]
          }
          upsert: {
            args: Prisma.QualificationCenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterPayload>
          }
          aggregate: {
            args: Prisma.QualificationCenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualificationCenter>
          }
          groupBy: {
            args: Prisma.QualificationCenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationCenterCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterCountAggregateOutputType> | number
          }
        }
      }
      Accreditation: {
        payload: Prisma.$AccreditationPayload<ExtArgs>
        fields: Prisma.AccreditationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccreditationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccreditationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          findFirst: {
            args: Prisma.AccreditationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccreditationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          findMany: {
            args: Prisma.AccreditationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>[]
          }
          create: {
            args: Prisma.AccreditationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          createMany: {
            args: Prisma.AccreditationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccreditationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>[]
          }
          delete: {
            args: Prisma.AccreditationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          update: {
            args: Prisma.AccreditationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          deleteMany: {
            args: Prisma.AccreditationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccreditationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccreditationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>[]
          }
          upsert: {
            args: Prisma.AccreditationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationPayload>
          }
          aggregate: {
            args: Prisma.AccreditationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccreditation>
          }
          groupBy: {
            args: Prisma.AccreditationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccreditationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccreditationCountArgs<ExtArgs>
            result: $Utils.Optional<AccreditationCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Expert: {
        payload: Prisma.$ExpertPayload<ExtArgs>
        fields: Prisma.ExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findFirst: {
            args: Prisma.ExpertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findMany: {
            args: Prisma.ExpertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          create: {
            args: Prisma.ExpertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          createMany: {
            args: Prisma.ExpertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          delete: {
            args: Prisma.ExpertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          update: {
            args: Prisma.ExpertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          upsert: {
            args: Prisma.ExpertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          aggregate: {
            args: Prisma.ExpertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpert>
          }
          groupBy: {
            args: Prisma.ExpertGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertCountAggregateOutputType> | number
          }
        }
      }
      Examination: {
        payload: Prisma.$ExaminationPayload<ExtArgs>
        fields: Prisma.ExaminationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExaminationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExaminationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findFirst: {
            args: Prisma.ExaminationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExaminationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findMany: {
            args: Prisma.ExaminationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          create: {
            args: Prisma.ExaminationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          createMany: {
            args: Prisma.ExaminationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExaminationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          delete: {
            args: Prisma.ExaminationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          update: {
            args: Prisma.ExaminationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          deleteMany: {
            args: Prisma.ExaminationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExaminationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExaminationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          upsert: {
            args: Prisma.ExaminationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          aggregate: {
            args: Prisma.ExaminationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamination>
          }
          groupBy: {
            args: Prisma.ExaminationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExaminationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExaminationCountArgs<ExtArgs>
            result: $Utils.Optional<ExaminationCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    developer?: DeveloperOmit
    profession?: ProfessionOmit
    professionalQualification?: ProfessionalQualificationOmit
    qualificationCenter?: QualificationCenterOmit
    accreditation?: AccreditationOmit
    person?: PersonOmit
    expert?: ExpertOmit
    examination?: ExaminationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DeveloperCountOutputType
   */

  export type DeveloperCountOutputType = {
    professions: number
  }

  export type DeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | DeveloperCountOutputTypeCountProfessionsArgs
  }

  // Custom InputTypes
  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperCountOutputType
     */
    select?: DeveloperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeveloperCountOutputType without action
   */
  export type DeveloperCountOutputTypeCountProfessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    professionalQualifications: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualifications?: boolean | ProfessionCountOutputTypeCountProfessionalQualificationsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountProfessionalQualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalQualificationWhereInput
  }


  /**
   * Count Type ProfessionalQualificationCountOutputType
   */

  export type ProfessionalQualificationCountOutputType = {
    accreditations: number
    persons: number
    experts: number
    examinations: number
  }

  export type ProfessionalQualificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accreditations?: boolean | ProfessionalQualificationCountOutputTypeCountAccreditationsArgs
    persons?: boolean | ProfessionalQualificationCountOutputTypeCountPersonsArgs
    experts?: boolean | ProfessionalQualificationCountOutputTypeCountExpertsArgs
    examinations?: boolean | ProfessionalQualificationCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualificationCountOutputType
     */
    select?: ProfessionalQualificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type QualificationCenterCountOutputType
   */

  export type QualificationCenterCountOutputType = {
    accreditations: number
    persons: number
    examinations: number
  }

  export type QualificationCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accreditations?: boolean | QualificationCenterCountOutputTypeCountAccreditationsArgs
    persons?: boolean | QualificationCenterCountOutputTypeCountPersonsArgs
    examinations?: boolean | QualificationCenterCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterCountOutputType
     */
    select?: QualificationCenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type ExpertCountOutputType
   */

  export type ExpertCountOutputType = {
    examinations: number
  }

  export type ExpertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | ExpertCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertCountOutputType
     */
    select?: ExpertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Developer
   */

  export type AggregateDeveloper = {
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  export type DeveloperAvgAggregateOutputType = {
    id: number | null
  }

  export type DeveloperSumAggregateOutputType = {
    id: number | null
  }

  export type DeveloperMinAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
  }

  export type DeveloperMaxAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
  }

  export type DeveloperCountAggregateOutputType = {
    id: number
    name: number
    edrpou: number
    _all: number
  }


  export type DeveloperAvgAggregateInputType = {
    id?: true
  }

  export type DeveloperSumAggregateInputType = {
    id?: true
  }

  export type DeveloperMinAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
  }

  export type DeveloperMaxAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
  }

  export type DeveloperCountAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
    _all?: true
  }

  export type DeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developer to aggregate.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DeveloperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeveloperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeveloperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeveloperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeveloperMaxAggregateInputType
  }

  export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
        [P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloper[P]>
      : GetScalarType<T[P], AggregateDeveloper[P]>
  }




  export type DeveloperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperWhereInput
    orderBy?: DeveloperOrderByWithAggregationInput | DeveloperOrderByWithAggregationInput[]
    by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum
    having?: DeveloperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeveloperCountAggregateInputType | true
    _avg?: DeveloperAvgAggregateInputType
    _sum?: DeveloperSumAggregateInputType
    _min?: DeveloperMinAggregateInputType
    _max?: DeveloperMaxAggregateInputType
  }

  export type DeveloperGroupByOutputType = {
    id: number
    name: string
    edrpou: string | null
    _count: DeveloperCountAggregateOutputType | null
    _avg: DeveloperAvgAggregateOutputType | null
    _sum: DeveloperSumAggregateOutputType | null
    _min: DeveloperMinAggregateOutputType | null
    _max: DeveloperMaxAggregateOutputType | null
  }

  type GetDeveloperGroupByPayload<T extends DeveloperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeveloperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
            : GetScalarType<T[P], DeveloperGroupByOutputType[P]>
        }
      >
    >


  export type DeveloperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
    professions?: boolean | Developer$professionsArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }, ExtArgs["result"]["developer"]>

  export type DeveloperSelectScalar = {
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }

  export type DeveloperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "edrpou", ExtArgs["result"]["developer"]>
  export type DeveloperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | Developer$professionsArgs<ExtArgs>
    _count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeveloperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeveloperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeveloperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developer"
    objects: {
      professions: Prisma.$ProfessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      edrpou: string | null
    }, ExtArgs["result"]["developer"]>
    composites: {}
  }

  type DeveloperGetPayload<S extends boolean | null | undefined | DeveloperDefaultArgs> = $Result.GetResult<Prisma.$DeveloperPayload, S>

  type DeveloperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeveloperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeveloperCountAggregateInputType | true
    }

  export interface DeveloperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developer'], meta: { name: 'Developer' } }
    /**
     * Find zero or one Developer that matches the filter.
     * @param {DeveloperFindUniqueArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeveloperFindUniqueArgs>(args: SelectSubset<T, DeveloperFindUniqueArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Developer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeveloperFindUniqueOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeveloperFindUniqueOrThrowArgs>(args: SelectSubset<T, DeveloperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeveloperFindFirstArgs>(args?: SelectSubset<T, DeveloperFindFirstArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindFirstOrThrowArgs} args - Arguments to find a Developer
     * @example
     * // Get one Developer
     * const developer = await prisma.developer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeveloperFindFirstOrThrowArgs>(args?: SelectSubset<T, DeveloperFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developer.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeveloperFindManyArgs>(args?: SelectSubset<T, DeveloperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Developer.
     * @param {DeveloperCreateArgs} args - Arguments to create a Developer.
     * @example
     * // Create one Developer
     * const Developer = await prisma.developer.create({
     *   data: {
     *     // ... data to create a Developer
     *   }
     * })
     * 
     */
    create<T extends DeveloperCreateArgs>(args: SelectSubset<T, DeveloperCreateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Developers.
     * @param {DeveloperCreateManyArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeveloperCreateManyArgs>(args?: SelectSubset<T, DeveloperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Developers and returns the data saved in the database.
     * @param {DeveloperCreateManyAndReturnArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developer = await prisma.developer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Developers and only return the `id`
     * const developerWithIdOnly = await prisma.developer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeveloperCreateManyAndReturnArgs>(args?: SelectSubset<T, DeveloperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Developer.
     * @param {DeveloperDeleteArgs} args - Arguments to delete one Developer.
     * @example
     * // Delete one Developer
     * const Developer = await prisma.developer.delete({
     *   where: {
     *     // ... filter to delete one Developer
     *   }
     * })
     * 
     */
    delete<T extends DeveloperDeleteArgs>(args: SelectSubset<T, DeveloperDeleteArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Developer.
     * @param {DeveloperUpdateArgs} args - Arguments to update one Developer.
     * @example
     * // Update one Developer
     * const developer = await prisma.developer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeveloperUpdateArgs>(args: SelectSubset<T, DeveloperUpdateArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Developers.
     * @param {DeveloperDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeveloperDeleteManyArgs>(args?: SelectSubset<T, DeveloperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeveloperUpdateManyArgs>(args: SelectSubset<T, DeveloperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers and returns the data updated in the database.
     * @param {DeveloperUpdateManyAndReturnArgs} args - Arguments to update many Developers.
     * @example
     * // Update many Developers
     * const developer = await prisma.developer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Developers and only return the `id`
     * const developerWithIdOnly = await prisma.developer.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeveloperUpdateManyAndReturnArgs>(args: SelectSubset<T, DeveloperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Developer.
     * @param {DeveloperUpsertArgs} args - Arguments to update or create a Developer.
     * @example
     * // Update or create a Developer
     * const developer = await prisma.developer.upsert({
     *   create: {
     *     // ... data to create a Developer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developer we want to update
     *   }
     * })
     */
    upsert<T extends DeveloperUpsertArgs>(args: SelectSubset<T, DeveloperUpsertArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developer.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DeveloperCountArgs>(
      args?: Subset<T, DeveloperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeveloperAggregateArgs>(args: Subset<T, DeveloperAggregateArgs>): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>

    /**
     * Group by Developer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperGroupByArgs} args - Group by arguments.
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
      T extends DeveloperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeveloperGroupByArgs['orderBy'] }
        : { orderBy?: DeveloperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeveloperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developer model
   */
  readonly fields: DeveloperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeveloperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professions<T extends Developer$professionsArgs<ExtArgs> = {}>(args?: Subset<T, Developer$professionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Developer model
   */
  interface DeveloperFieldRefs {
    readonly id: FieldRef<"Developer", 'Int'>
    readonly name: FieldRef<"Developer", 'String'>
    readonly edrpou: FieldRef<"Developer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Developer findUnique
   */
  export type DeveloperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findUniqueOrThrow
   */
  export type DeveloperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer findFirst
   */
  export type DeveloperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findFirstOrThrow
   */
  export type DeveloperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developer to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer findMany
   */
  export type DeveloperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DeveloperOrderByWithRelationInput | DeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
  }

  /**
   * Developer create
   */
  export type DeveloperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to create a Developer.
     */
    data: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
  }

  /**
   * Developer createMany
   */
  export type DeveloperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developer createManyAndReturn
   */
  export type DeveloperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * The data used to create many Developers.
     */
    data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developer update
   */
  export type DeveloperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The data needed to update a Developer.
     */
    data: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
    /**
     * Choose, which Developer to update.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer updateMany
   */
  export type DeveloperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developer updateManyAndReturn
   */
  export type DeveloperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * The data used to update Developers.
     */
    data: XOR<DeveloperUpdateManyMutationInput, DeveloperUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developer upsert
   */
  export type DeveloperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * The filter to search for the Developer to update in case it exists.
     */
    where: DeveloperWhereUniqueInput
    /**
     * In case the Developer found by the `where` argument doesn't exist, create a new Developer with this data.
     */
    create: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
    /**
     * In case the Developer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
  }

  /**
   * Developer delete
   */
  export type DeveloperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
    /**
     * Filter which Developer to delete.
     */
    where: DeveloperWhereUniqueInput
  }

  /**
   * Developer deleteMany
   */
  export type DeveloperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DeveloperWhereInput
    /**
     * Limit how many Developers to delete.
     */
    limit?: number
  }

  /**
   * Developer.professions
   */
  export type Developer$professionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    cursor?: ProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Developer without action
   */
  export type DeveloperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developer
     */
    select?: DeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developer
     */
    omit?: DeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperInclude<ExtArgs> | null
  }


  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionAvgAggregateOutputType = {
    id: number | null
    developerId: number | null
  }

  export type ProfessionSumAggregateOutputType = {
    id: number | null
    developerId: number | null
  }

  export type ProfessionMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    developerId: number | null
    approvalDate: Date | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    developerId: number | null
    approvalDate: Date | null
  }

  export type ProfessionCountAggregateOutputType = {
    id: number
    name: number
    code: number
    developerId: number
    approvalDate: number
    _all: number
  }


  export type ProfessionAvgAggregateInputType = {
    id?: true
    developerId?: true
  }

  export type ProfessionSumAggregateInputType = {
    id?: true
    developerId?: true
  }

  export type ProfessionMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    developerId?: true
    approvalDate?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    developerId?: true
    approvalDate?: true
  }

  export type ProfessionCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    developerId?: true
    approvalDate?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _avg?: ProfessionAvgAggregateInputType
    _sum?: ProfessionSumAggregateInputType
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id: number
    name: string
    code: string
    developerId: number
    approvalDate: Date
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
    professionalQualifications?: boolean | Profession$professionalQualificationsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
  }

  export type ProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "developerId" | "approvalDate", ExtArgs["result"]["profession"]>
  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
    professionalQualifications?: boolean | Profession$professionalQualificationsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | DeveloperDefaultArgs<ExtArgs>
  }

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      developer: Prisma.$DeveloperPayload<ExtArgs>
      professionalQualifications: Prisma.$ProfessionalQualificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      developerId: number
      approvalDate: Date
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionWithIdOnly = await prisma.profession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {ProfessionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions and returns the data updated in the database.
     * @param {ProfessionUpdateManyAndReturnArgs} args - Arguments to update many Professions.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
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
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    developer<T extends DeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperDefaultArgs<ExtArgs>>): Prisma__DeveloperClient<$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professionalQualifications<T extends Profession$professionalQualificationsArgs<ExtArgs> = {}>(args?: Subset<T, Profession$professionalQualificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profession model
   */
  interface ProfessionFieldRefs {
    readonly id: FieldRef<"Profession", 'Int'>
    readonly name: FieldRef<"Profession", 'String'>
    readonly code: FieldRef<"Profession", 'String'>
    readonly developerId: FieldRef<"Profession", 'Int'>
    readonly approvalDate: FieldRef<"Profession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession createManyAndReturn
   */
  export type ProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession updateManyAndReturn
   */
  export type ProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to delete.
     */
    limit?: number
  }

  /**
   * Profession.professionalQualifications
   */
  export type Profession$professionalQualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    where?: ProfessionalQualificationWhereInput
    orderBy?: ProfessionalQualificationOrderByWithRelationInput | ProfessionalQualificationOrderByWithRelationInput[]
    cursor?: ProfessionalQualificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalQualificationScalarFieldEnum | ProfessionalQualificationScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model ProfessionalQualification
   */

  export type AggregateProfessionalQualification = {
    _count: ProfessionalQualificationCountAggregateOutputType | null
    _avg: ProfessionalQualificationAvgAggregateOutputType | null
    _sum: ProfessionalQualificationSumAggregateOutputType | null
    _min: ProfessionalQualificationMinAggregateOutputType | null
    _max: ProfessionalQualificationMaxAggregateOutputType | null
  }

  export type ProfessionalQualificationAvgAggregateOutputType = {
    id: number | null
    nkrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationSumAggregateOutputType = {
    id: number | null
    nkrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationMinAggregateOutputType = {
    id: number | null
    name: string | null
    nkrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nkrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationCountAggregateOutputType = {
    id: number
    name: number
    nkrLevel: number
    professionId: number
    _all: number
  }


  export type ProfessionalQualificationAvgAggregateInputType = {
    id?: true
    nkrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationSumAggregateInputType = {
    id?: true
    nkrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationMinAggregateInputType = {
    id?: true
    name?: true
    nkrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationMaxAggregateInputType = {
    id?: true
    name?: true
    nkrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationCountAggregateInputType = {
    id?: true
    name?: true
    nkrLevel?: true
    professionId?: true
    _all?: true
  }

  export type ProfessionalQualificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalQualification to aggregate.
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalQualifications to fetch.
     */
    orderBy?: ProfessionalQualificationOrderByWithRelationInput | ProfessionalQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessionalQualifications
    **/
    _count?: true | ProfessionalQualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalQualificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalQualificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalQualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalQualificationMaxAggregateInputType
  }

  export type GetProfessionalQualificationAggregateType<T extends ProfessionalQualificationAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionalQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionalQualification[P]>
      : GetScalarType<T[P], AggregateProfessionalQualification[P]>
  }




  export type ProfessionalQualificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalQualificationWhereInput
    orderBy?: ProfessionalQualificationOrderByWithAggregationInput | ProfessionalQualificationOrderByWithAggregationInput[]
    by: ProfessionalQualificationScalarFieldEnum[] | ProfessionalQualificationScalarFieldEnum
    having?: ProfessionalQualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalQualificationCountAggregateInputType | true
    _avg?: ProfessionalQualificationAvgAggregateInputType
    _sum?: ProfessionalQualificationSumAggregateInputType
    _min?: ProfessionalQualificationMinAggregateInputType
    _max?: ProfessionalQualificationMaxAggregateInputType
  }

  export type ProfessionalQualificationGroupByOutputType = {
    id: number
    name: string
    nkrLevel: number
    professionId: number
    _count: ProfessionalQualificationCountAggregateOutputType | null
    _avg: ProfessionalQualificationAvgAggregateOutputType | null
    _sum: ProfessionalQualificationSumAggregateOutputType | null
    _min: ProfessionalQualificationMinAggregateOutputType | null
    _max: ProfessionalQualificationMaxAggregateOutputType | null
  }

  type GetProfessionalQualificationGroupByPayload<T extends ProfessionalQualificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalQualificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalQualificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalQualificationGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalQualificationGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalQualificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nkrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    accreditations?: boolean | ProfessionalQualification$accreditationsArgs<ExtArgs>
    persons?: boolean | ProfessionalQualification$personsArgs<ExtArgs>
    experts?: boolean | ProfessionalQualification$expertsArgs<ExtArgs>
    examinations?: boolean | ProfessionalQualification$examinationsArgs<ExtArgs>
    _count?: boolean | ProfessionalQualificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nkrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nkrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectScalar = {
    id?: boolean
    name?: boolean
    nkrLevel?: boolean
    professionId?: boolean
  }

  export type ProfessionalQualificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nkrLevel" | "professionId", ExtArgs["result"]["professionalQualification"]>
  export type ProfessionalQualificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    accreditations?: boolean | ProfessionalQualification$accreditationsArgs<ExtArgs>
    persons?: boolean | ProfessionalQualification$personsArgs<ExtArgs>
    experts?: boolean | ProfessionalQualification$expertsArgs<ExtArgs>
    examinations?: boolean | ProfessionalQualification$examinationsArgs<ExtArgs>
    _count?: boolean | ProfessionalQualificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionalQualificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }
  export type ProfessionalQualificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }

  export type $ProfessionalQualificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessionalQualification"
    objects: {
      profession: Prisma.$ProfessionPayload<ExtArgs>
      accreditations: Prisma.$AccreditationPayload<ExtArgs>[]
      persons: Prisma.$PersonPayload<ExtArgs>[]
      experts: Prisma.$ExpertPayload<ExtArgs>[]
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nkrLevel: number
      professionId: number
    }, ExtArgs["result"]["professionalQualification"]>
    composites: {}
  }

  type ProfessionalQualificationGetPayload<S extends boolean | null | undefined | ProfessionalQualificationDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalQualificationPayload, S>

  type ProfessionalQualificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalQualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalQualificationCountAggregateInputType | true
    }

  export interface ProfessionalQualificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessionalQualification'], meta: { name: 'ProfessionalQualification' } }
    /**
     * Find zero or one ProfessionalQualification that matches the filter.
     * @param {ProfessionalQualificationFindUniqueArgs} args - Arguments to find a ProfessionalQualification
     * @example
     * // Get one ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalQualificationFindUniqueArgs>(args: SelectSubset<T, ProfessionalQualificationFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionalQualification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalQualificationFindUniqueOrThrowArgs} args - Arguments to find a ProfessionalQualification
     * @example
     * // Get one ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalQualificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalQualificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalQualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationFindFirstArgs} args - Arguments to find a ProfessionalQualification
     * @example
     * // Get one ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalQualificationFindFirstArgs>(args?: SelectSubset<T, ProfessionalQualificationFindFirstArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalQualification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationFindFirstOrThrowArgs} args - Arguments to find a ProfessionalQualification
     * @example
     * // Get one ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalQualificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalQualificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionalQualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionalQualifications
     * const professionalQualifications = await prisma.professionalQualification.findMany()
     * 
     * // Get first 10 ProfessionalQualifications
     * const professionalQualifications = await prisma.professionalQualification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalQualificationWithIdOnly = await prisma.professionalQualification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalQualificationFindManyArgs>(args?: SelectSubset<T, ProfessionalQualificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionalQualification.
     * @param {ProfessionalQualificationCreateArgs} args - Arguments to create a ProfessionalQualification.
     * @example
     * // Create one ProfessionalQualification
     * const ProfessionalQualification = await prisma.professionalQualification.create({
     *   data: {
     *     // ... data to create a ProfessionalQualification
     *   }
     * })
     * 
     */
    create<T extends ProfessionalQualificationCreateArgs>(args: SelectSubset<T, ProfessionalQualificationCreateArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionalQualifications.
     * @param {ProfessionalQualificationCreateManyArgs} args - Arguments to create many ProfessionalQualifications.
     * @example
     * // Create many ProfessionalQualifications
     * const professionalQualification = await prisma.professionalQualification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalQualificationCreateManyArgs>(args?: SelectSubset<T, ProfessionalQualificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionalQualifications and returns the data saved in the database.
     * @param {ProfessionalQualificationCreateManyAndReturnArgs} args - Arguments to create many ProfessionalQualifications.
     * @example
     * // Create many ProfessionalQualifications
     * const professionalQualification = await prisma.professionalQualification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionalQualifications and only return the `id`
     * const professionalQualificationWithIdOnly = await prisma.professionalQualification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalQualificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalQualificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionalQualification.
     * @param {ProfessionalQualificationDeleteArgs} args - Arguments to delete one ProfessionalQualification.
     * @example
     * // Delete one ProfessionalQualification
     * const ProfessionalQualification = await prisma.professionalQualification.delete({
     *   where: {
     *     // ... filter to delete one ProfessionalQualification
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalQualificationDeleteArgs>(args: SelectSubset<T, ProfessionalQualificationDeleteArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionalQualification.
     * @param {ProfessionalQualificationUpdateArgs} args - Arguments to update one ProfessionalQualification.
     * @example
     * // Update one ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalQualificationUpdateArgs>(args: SelectSubset<T, ProfessionalQualificationUpdateArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionalQualifications.
     * @param {ProfessionalQualificationDeleteManyArgs} args - Arguments to filter ProfessionalQualifications to delete.
     * @example
     * // Delete a few ProfessionalQualifications
     * const { count } = await prisma.professionalQualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalQualificationDeleteManyArgs>(args?: SelectSubset<T, ProfessionalQualificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionalQualifications
     * const professionalQualification = await prisma.professionalQualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalQualificationUpdateManyArgs>(args: SelectSubset<T, ProfessionalQualificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalQualifications and returns the data updated in the database.
     * @param {ProfessionalQualificationUpdateManyAndReturnArgs} args - Arguments to update many ProfessionalQualifications.
     * @example
     * // Update many ProfessionalQualifications
     * const professionalQualification = await prisma.professionalQualification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionalQualifications and only return the `id`
     * const professionalQualificationWithIdOnly = await prisma.professionalQualification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalQualificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalQualificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionalQualification.
     * @param {ProfessionalQualificationUpsertArgs} args - Arguments to update or create a ProfessionalQualification.
     * @example
     * // Update or create a ProfessionalQualification
     * const professionalQualification = await prisma.professionalQualification.upsert({
     *   create: {
     *     // ... data to create a ProfessionalQualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionalQualification we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalQualificationUpsertArgs>(args: SelectSubset<T, ProfessionalQualificationUpsertArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionalQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationCountArgs} args - Arguments to filter ProfessionalQualifications to count.
     * @example
     * // Count the number of ProfessionalQualifications
     * const count = await prisma.professionalQualification.count({
     *   where: {
     *     // ... the filter for the ProfessionalQualifications we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalQualificationCountArgs>(
      args?: Subset<T, ProfessionalQualificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalQualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionalQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalQualificationAggregateArgs>(args: Subset<T, ProfessionalQualificationAggregateArgs>): Prisma.PrismaPromise<GetProfessionalQualificationAggregateType<T>>

    /**
     * Group by ProfessionalQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalQualificationGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalQualificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalQualificationGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalQualificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalQualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalQualificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessionalQualification model
   */
  readonly fields: ProfessionalQualificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessionalQualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalQualificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accreditations<T extends ProfessionalQualification$accreditationsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$accreditationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    persons<T extends ProfessionalQualification$personsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experts<T extends ProfessionalQualification$expertsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$expertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examinations<T extends ProfessionalQualification$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProfessionalQualification model
   */
  interface ProfessionalQualificationFieldRefs {
    readonly id: FieldRef<"ProfessionalQualification", 'Int'>
    readonly name: FieldRef<"ProfessionalQualification", 'String'>
    readonly nkrLevel: FieldRef<"ProfessionalQualification", 'Int'>
    readonly professionId: FieldRef<"ProfessionalQualification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProfessionalQualification findUnique
   */
  export type ProfessionalQualificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalQualification to fetch.
     */
    where: ProfessionalQualificationWhereUniqueInput
  }

  /**
   * ProfessionalQualification findUniqueOrThrow
   */
  export type ProfessionalQualificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalQualification to fetch.
     */
    where: ProfessionalQualificationWhereUniqueInput
  }

  /**
   * ProfessionalQualification findFirst
   */
  export type ProfessionalQualificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalQualification to fetch.
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalQualifications to fetch.
     */
    orderBy?: ProfessionalQualificationOrderByWithRelationInput | ProfessionalQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalQualifications.
     */
    cursor?: ProfessionalQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalQualifications.
     */
    distinct?: ProfessionalQualificationScalarFieldEnum | ProfessionalQualificationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification findFirstOrThrow
   */
  export type ProfessionalQualificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalQualification to fetch.
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalQualifications to fetch.
     */
    orderBy?: ProfessionalQualificationOrderByWithRelationInput | ProfessionalQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalQualifications.
     */
    cursor?: ProfessionalQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalQualifications.
     */
    distinct?: ProfessionalQualificationScalarFieldEnum | ProfessionalQualificationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification findMany
   */
  export type ProfessionalQualificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalQualifications to fetch.
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalQualifications to fetch.
     */
    orderBy?: ProfessionalQualificationOrderByWithRelationInput | ProfessionalQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessionalQualifications.
     */
    cursor?: ProfessionalQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalQualifications.
     */
    skip?: number
    distinct?: ProfessionalQualificationScalarFieldEnum | ProfessionalQualificationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification create
   */
  export type ProfessionalQualificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessionalQualification.
     */
    data: XOR<ProfessionalQualificationCreateInput, ProfessionalQualificationUncheckedCreateInput>
  }

  /**
   * ProfessionalQualification createMany
   */
  export type ProfessionalQualificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessionalQualifications.
     */
    data: ProfessionalQualificationCreateManyInput | ProfessionalQualificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessionalQualification createManyAndReturn
   */
  export type ProfessionalQualificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessionalQualifications.
     */
    data: ProfessionalQualificationCreateManyInput | ProfessionalQualificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalQualification update
   */
  export type ProfessionalQualificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessionalQualification.
     */
    data: XOR<ProfessionalQualificationUpdateInput, ProfessionalQualificationUncheckedUpdateInput>
    /**
     * Choose, which ProfessionalQualification to update.
     */
    where: ProfessionalQualificationWhereUniqueInput
  }

  /**
   * ProfessionalQualification updateMany
   */
  export type ProfessionalQualificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessionalQualifications.
     */
    data: XOR<ProfessionalQualificationUpdateManyMutationInput, ProfessionalQualificationUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalQualifications to update
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * Limit how many ProfessionalQualifications to update.
     */
    limit?: number
  }

  /**
   * ProfessionalQualification updateManyAndReturn
   */
  export type ProfessionalQualificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * The data used to update ProfessionalQualifications.
     */
    data: XOR<ProfessionalQualificationUpdateManyMutationInput, ProfessionalQualificationUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalQualifications to update
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * Limit how many ProfessionalQualifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalQualification upsert
   */
  export type ProfessionalQualificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessionalQualification to update in case it exists.
     */
    where: ProfessionalQualificationWhereUniqueInput
    /**
     * In case the ProfessionalQualification found by the `where` argument doesn't exist, create a new ProfessionalQualification with this data.
     */
    create: XOR<ProfessionalQualificationCreateInput, ProfessionalQualificationUncheckedCreateInput>
    /**
     * In case the ProfessionalQualification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalQualificationUpdateInput, ProfessionalQualificationUncheckedUpdateInput>
  }

  /**
   * ProfessionalQualification delete
   */
  export type ProfessionalQualificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
    /**
     * Filter which ProfessionalQualification to delete.
     */
    where: ProfessionalQualificationWhereUniqueInput
  }

  /**
   * ProfessionalQualification deleteMany
   */
  export type ProfessionalQualificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalQualifications to delete
     */
    where?: ProfessionalQualificationWhereInput
    /**
     * Limit how many ProfessionalQualifications to delete.
     */
    limit?: number
  }

  /**
   * ProfessionalQualification.accreditations
   */
  export type ProfessionalQualification$accreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    where?: AccreditationWhereInput
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    cursor?: AccreditationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccreditationScalarFieldEnum | AccreditationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.persons
   */
  export type ProfessionalQualification$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.experts
   */
  export type ProfessionalQualification$expertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    cursor?: ExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.examinations
   */
  export type ProfessionalQualification$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification without action
   */
  export type ProfessionalQualificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalQualification
     */
    select?: ProfessionalQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalQualification
     */
    omit?: ProfessionalQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalQualificationInclude<ExtArgs> | null
  }


  /**
   * Model QualificationCenter
   */

  export type AggregateQualificationCenter = {
    _count: QualificationCenterCountAggregateOutputType | null
    _avg: QualificationCenterAvgAggregateOutputType | null
    _sum: QualificationCenterSumAggregateOutputType | null
    _min: QualificationCenterMinAggregateOutputType | null
    _max: QualificationCenterMaxAggregateOutputType | null
  }

  export type QualificationCenterAvgAggregateOutputType = {
    id: number | null
  }

  export type QualificationCenterSumAggregateOutputType = {
    id: number | null
  }

  export type QualificationCenterMinAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
    address: string | null
  }

  export type QualificationCenterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
    address: string | null
  }

  export type QualificationCenterCountAggregateOutputType = {
    id: number
    name: number
    edrpou: number
    address: number
    _all: number
  }


  export type QualificationCenterAvgAggregateInputType = {
    id?: true
  }

  export type QualificationCenterSumAggregateInputType = {
    id?: true
  }

  export type QualificationCenterMinAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
    address?: true
  }

  export type QualificationCenterMaxAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
    address?: true
  }

  export type QualificationCenterCountAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
    address?: true
    _all?: true
  }

  export type QualificationCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenter to aggregate.
     */
    where?: QualificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenters to fetch.
     */
    orderBy?: QualificationCenterOrderByWithRelationInput | QualificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualificationCenters
    **/
    _count?: true | QualificationCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationCenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationCenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationCenterMaxAggregateInputType
  }

  export type GetQualificationCenterAggregateType<T extends QualificationCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateQualificationCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualificationCenter[P]>
      : GetScalarType<T[P], AggregateQualificationCenter[P]>
  }




  export type QualificationCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterWhereInput
    orderBy?: QualificationCenterOrderByWithAggregationInput | QualificationCenterOrderByWithAggregationInput[]
    by: QualificationCenterScalarFieldEnum[] | QualificationCenterScalarFieldEnum
    having?: QualificationCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCenterCountAggregateInputType | true
    _avg?: QualificationCenterAvgAggregateInputType
    _sum?: QualificationCenterSumAggregateInputType
    _min?: QualificationCenterMinAggregateInputType
    _max?: QualificationCenterMaxAggregateInputType
  }

  export type QualificationCenterGroupByOutputType = {
    id: number
    name: string
    edrpou: string
    address: string
    _count: QualificationCenterCountAggregateOutputType | null
    _avg: QualificationCenterAvgAggregateOutputType | null
    _sum: QualificationCenterSumAggregateOutputType | null
    _min: QualificationCenterMinAggregateOutputType | null
    _max: QualificationCenterMaxAggregateOutputType | null
  }

  type GetQualificationCenterGroupByPayload<T extends QualificationCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationCenterGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationCenterGroupByOutputType[P]>
        }
      >
    >


  export type QualificationCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
    address?: boolean
    accreditations?: boolean | QualificationCenter$accreditationsArgs<ExtArgs>
    persons?: boolean | QualificationCenter$personsArgs<ExtArgs>
    examinations?: boolean | QualificationCenter$examinationsArgs<ExtArgs>
    _count?: boolean | QualificationCenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenter"]>

  export type QualificationCenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
    address?: boolean
  }, ExtArgs["result"]["qualificationCenter"]>

  export type QualificationCenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
    address?: boolean
  }, ExtArgs["result"]["qualificationCenter"]>

  export type QualificationCenterSelectScalar = {
    id?: boolean
    name?: boolean
    edrpou?: boolean
    address?: boolean
  }

  export type QualificationCenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "edrpou" | "address", ExtArgs["result"]["qualificationCenter"]>
  export type QualificationCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accreditations?: boolean | QualificationCenter$accreditationsArgs<ExtArgs>
    persons?: boolean | QualificationCenter$personsArgs<ExtArgs>
    examinations?: boolean | QualificationCenter$examinationsArgs<ExtArgs>
    _count?: boolean | QualificationCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QualificationCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QualificationCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QualificationCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualificationCenter"
    objects: {
      accreditations: Prisma.$AccreditationPayload<ExtArgs>[]
      persons: Prisma.$PersonPayload<ExtArgs>[]
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      edrpou: string
      address: string
    }, ExtArgs["result"]["qualificationCenter"]>
    composites: {}
  }

  type QualificationCenterGetPayload<S extends boolean | null | undefined | QualificationCenterDefaultArgs> = $Result.GetResult<Prisma.$QualificationCenterPayload, S>

  type QualificationCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationCenterCountAggregateInputType | true
    }

  export interface QualificationCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualificationCenter'], meta: { name: 'QualificationCenter' } }
    /**
     * Find zero or one QualificationCenter that matches the filter.
     * @param {QualificationCenterFindUniqueArgs} args - Arguments to find a QualificationCenter
     * @example
     * // Get one QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationCenterFindUniqueArgs>(args: SelectSubset<T, QualificationCenterFindUniqueArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualificationCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationCenterFindUniqueOrThrowArgs} args - Arguments to find a QualificationCenter
     * @example
     * // Get one QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationCenterFindUniqueOrThrowArgs>(args: SelectSubset<T, QualificationCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterFindFirstArgs} args - Arguments to find a QualificationCenter
     * @example
     * // Get one QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationCenterFindFirstArgs>(args?: SelectSubset<T, QualificationCenterFindFirstArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterFindFirstOrThrowArgs} args - Arguments to find a QualificationCenter
     * @example
     * // Get one QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationCenterFindFirstOrThrowArgs>(args?: SelectSubset<T, QualificationCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualificationCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualificationCenters
     * const qualificationCenters = await prisma.qualificationCenter.findMany()
     * 
     * // Get first 10 QualificationCenters
     * const qualificationCenters = await prisma.qualificationCenter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationCenterWithIdOnly = await prisma.qualificationCenter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualificationCenterFindManyArgs>(args?: SelectSubset<T, QualificationCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualificationCenter.
     * @param {QualificationCenterCreateArgs} args - Arguments to create a QualificationCenter.
     * @example
     * // Create one QualificationCenter
     * const QualificationCenter = await prisma.qualificationCenter.create({
     *   data: {
     *     // ... data to create a QualificationCenter
     *   }
     * })
     * 
     */
    create<T extends QualificationCenterCreateArgs>(args: SelectSubset<T, QualificationCenterCreateArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualificationCenters.
     * @param {QualificationCenterCreateManyArgs} args - Arguments to create many QualificationCenters.
     * @example
     * // Create many QualificationCenters
     * const qualificationCenter = await prisma.qualificationCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualificationCenterCreateManyArgs>(args?: SelectSubset<T, QualificationCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualificationCenters and returns the data saved in the database.
     * @param {QualificationCenterCreateManyAndReturnArgs} args - Arguments to create many QualificationCenters.
     * @example
     * // Create many QualificationCenters
     * const qualificationCenter = await prisma.qualificationCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualificationCenters and only return the `id`
     * const qualificationCenterWithIdOnly = await prisma.qualificationCenter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualificationCenterCreateManyAndReturnArgs>(args?: SelectSubset<T, QualificationCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualificationCenter.
     * @param {QualificationCenterDeleteArgs} args - Arguments to delete one QualificationCenter.
     * @example
     * // Delete one QualificationCenter
     * const QualificationCenter = await prisma.qualificationCenter.delete({
     *   where: {
     *     // ... filter to delete one QualificationCenter
     *   }
     * })
     * 
     */
    delete<T extends QualificationCenterDeleteArgs>(args: SelectSubset<T, QualificationCenterDeleteArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualificationCenter.
     * @param {QualificationCenterUpdateArgs} args - Arguments to update one QualificationCenter.
     * @example
     * // Update one QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualificationCenterUpdateArgs>(args: SelectSubset<T, QualificationCenterUpdateArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualificationCenters.
     * @param {QualificationCenterDeleteManyArgs} args - Arguments to filter QualificationCenters to delete.
     * @example
     * // Delete a few QualificationCenters
     * const { count } = await prisma.qualificationCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualificationCenterDeleteManyArgs>(args?: SelectSubset<T, QualificationCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualificationCenters
     * const qualificationCenter = await prisma.qualificationCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualificationCenterUpdateManyArgs>(args: SelectSubset<T, QualificationCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenters and returns the data updated in the database.
     * @param {QualificationCenterUpdateManyAndReturnArgs} args - Arguments to update many QualificationCenters.
     * @example
     * // Update many QualificationCenters
     * const qualificationCenter = await prisma.qualificationCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualificationCenters and only return the `id`
     * const qualificationCenterWithIdOnly = await prisma.qualificationCenter.updateManyAndReturn({
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
    updateManyAndReturn<T extends QualificationCenterUpdateManyAndReturnArgs>(args: SelectSubset<T, QualificationCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualificationCenter.
     * @param {QualificationCenterUpsertArgs} args - Arguments to update or create a QualificationCenter.
     * @example
     * // Update or create a QualificationCenter
     * const qualificationCenter = await prisma.qualificationCenter.upsert({
     *   create: {
     *     // ... data to create a QualificationCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualificationCenter we want to update
     *   }
     * })
     */
    upsert<T extends QualificationCenterUpsertArgs>(args: SelectSubset<T, QualificationCenterUpsertArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualificationCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterCountArgs} args - Arguments to filter QualificationCenters to count.
     * @example
     * // Count the number of QualificationCenters
     * const count = await prisma.qualificationCenter.count({
     *   where: {
     *     // ... the filter for the QualificationCenters we want to count
     *   }
     * })
    **/
    count<T extends QualificationCenterCountArgs>(
      args?: Subset<T, QualificationCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualificationCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationCenterAggregateArgs>(args: Subset<T, QualificationCenterAggregateArgs>): Prisma.PrismaPromise<GetQualificationCenterAggregateType<T>>

    /**
     * Group by QualificationCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterGroupByArgs} args - Group by arguments.
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
      T extends QualificationCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationCenterGroupByArgs['orderBy'] }
        : { orderBy?: QualificationCenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualificationCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualificationCenter model
   */
  readonly fields: QualificationCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualificationCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accreditations<T extends QualificationCenter$accreditationsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$accreditationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    persons<T extends QualificationCenter$personsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examinations<T extends QualificationCenter$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QualificationCenter model
   */
  interface QualificationCenterFieldRefs {
    readonly id: FieldRef<"QualificationCenter", 'Int'>
    readonly name: FieldRef<"QualificationCenter", 'String'>
    readonly edrpou: FieldRef<"QualificationCenter", 'String'>
    readonly address: FieldRef<"QualificationCenter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QualificationCenter findUnique
   */
  export type QualificationCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenter to fetch.
     */
    where: QualificationCenterWhereUniqueInput
  }

  /**
   * QualificationCenter findUniqueOrThrow
   */
  export type QualificationCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenter to fetch.
     */
    where: QualificationCenterWhereUniqueInput
  }

  /**
   * QualificationCenter findFirst
   */
  export type QualificationCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenter to fetch.
     */
    where?: QualificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenters to fetch.
     */
    orderBy?: QualificationCenterOrderByWithRelationInput | QualificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenters.
     */
    cursor?: QualificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenters.
     */
    distinct?: QualificationCenterScalarFieldEnum | QualificationCenterScalarFieldEnum[]
  }

  /**
   * QualificationCenter findFirstOrThrow
   */
  export type QualificationCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenter to fetch.
     */
    where?: QualificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenters to fetch.
     */
    orderBy?: QualificationCenterOrderByWithRelationInput | QualificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenters.
     */
    cursor?: QualificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenters.
     */
    distinct?: QualificationCenterScalarFieldEnum | QualificationCenterScalarFieldEnum[]
  }

  /**
   * QualificationCenter findMany
   */
  export type QualificationCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenters to fetch.
     */
    where?: QualificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenters to fetch.
     */
    orderBy?: QualificationCenterOrderByWithRelationInput | QualificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualificationCenters.
     */
    cursor?: QualificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenters.
     */
    skip?: number
    distinct?: QualificationCenterScalarFieldEnum | QualificationCenterScalarFieldEnum[]
  }

  /**
   * QualificationCenter create
   */
  export type QualificationCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a QualificationCenter.
     */
    data: XOR<QualificationCenterCreateInput, QualificationCenterUncheckedCreateInput>
  }

  /**
   * QualificationCenter createMany
   */
  export type QualificationCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualificationCenters.
     */
    data: QualificationCenterCreateManyInput | QualificationCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationCenter createManyAndReturn
   */
  export type QualificationCenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * The data used to create many QualificationCenters.
     */
    data: QualificationCenterCreateManyInput | QualificationCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationCenter update
   */
  export type QualificationCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a QualificationCenter.
     */
    data: XOR<QualificationCenterUpdateInput, QualificationCenterUncheckedUpdateInput>
    /**
     * Choose, which QualificationCenter to update.
     */
    where: QualificationCenterWhereUniqueInput
  }

  /**
   * QualificationCenter updateMany
   */
  export type QualificationCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualificationCenters.
     */
    data: XOR<QualificationCenterUpdateManyMutationInput, QualificationCenterUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenters to update
     */
    where?: QualificationCenterWhereInput
    /**
     * Limit how many QualificationCenters to update.
     */
    limit?: number
  }

  /**
   * QualificationCenter updateManyAndReturn
   */
  export type QualificationCenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * The data used to update QualificationCenters.
     */
    data: XOR<QualificationCenterUpdateManyMutationInput, QualificationCenterUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenters to update
     */
    where?: QualificationCenterWhereInput
    /**
     * Limit how many QualificationCenters to update.
     */
    limit?: number
  }

  /**
   * QualificationCenter upsert
   */
  export type QualificationCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the QualificationCenter to update in case it exists.
     */
    where: QualificationCenterWhereUniqueInput
    /**
     * In case the QualificationCenter found by the `where` argument doesn't exist, create a new QualificationCenter with this data.
     */
    create: XOR<QualificationCenterCreateInput, QualificationCenterUncheckedCreateInput>
    /**
     * In case the QualificationCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationCenterUpdateInput, QualificationCenterUncheckedUpdateInput>
  }

  /**
   * QualificationCenter delete
   */
  export type QualificationCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
    /**
     * Filter which QualificationCenter to delete.
     */
    where: QualificationCenterWhereUniqueInput
  }

  /**
   * QualificationCenter deleteMany
   */
  export type QualificationCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenters to delete
     */
    where?: QualificationCenterWhereInput
    /**
     * Limit how many QualificationCenters to delete.
     */
    limit?: number
  }

  /**
   * QualificationCenter.accreditations
   */
  export type QualificationCenter$accreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    where?: AccreditationWhereInput
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    cursor?: AccreditationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccreditationScalarFieldEnum | AccreditationScalarFieldEnum[]
  }

  /**
   * QualificationCenter.persons
   */
  export type QualificationCenter$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * QualificationCenter.examinations
   */
  export type QualificationCenter$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * QualificationCenter without action
   */
  export type QualificationCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenter
     */
    select?: QualificationCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenter
     */
    omit?: QualificationCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterInclude<ExtArgs> | null
  }


  /**
   * Model Accreditation
   */

  export type AggregateAccreditation = {
    _count: AccreditationCountAggregateOutputType | null
    _avg: AccreditationAvgAggregateOutputType | null
    _sum: AccreditationSumAggregateOutputType | null
    _min: AccreditationMinAggregateOutputType | null
    _max: AccreditationMaxAggregateOutputType | null
  }

  export type AccreditationAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
  }

  export type AccreditationSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
  }

  export type AccreditationMinAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    certificateNumber: string | null
    sessionNQADate: Date | null
  }

  export type AccreditationMaxAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    certificateNumber: string | null
    sessionNQADate: Date | null
  }

  export type AccreditationCountAggregateOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    certificateNumber: number
    sessionNQADate: number
    _all: number
  }


  export type AccreditationAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
  }

  export type AccreditationSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
  }

  export type AccreditationMinAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    certificateNumber?: true
    sessionNQADate?: true
  }

  export type AccreditationMaxAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    certificateNumber?: true
    sessionNQADate?: true
  }

  export type AccreditationCountAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    certificateNumber?: true
    sessionNQADate?: true
    _all?: true
  }

  export type AccreditationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accreditation to aggregate.
     */
    where?: AccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accreditations to fetch.
     */
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accreditations
    **/
    _count?: true | AccreditationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccreditationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccreditationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccreditationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccreditationMaxAggregateInputType
  }

  export type GetAccreditationAggregateType<T extends AccreditationAggregateArgs> = {
        [P in keyof T & keyof AggregateAccreditation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccreditation[P]>
      : GetScalarType<T[P], AggregateAccreditation[P]>
  }




  export type AccreditationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationWhereInput
    orderBy?: AccreditationOrderByWithAggregationInput | AccreditationOrderByWithAggregationInput[]
    by: AccreditationScalarFieldEnum[] | AccreditationScalarFieldEnum
    having?: AccreditationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccreditationCountAggregateInputType | true
    _avg?: AccreditationAvgAggregateInputType
    _sum?: AccreditationSumAggregateInputType
    _min?: AccreditationMinAggregateInputType
    _max?: AccreditationMaxAggregateInputType
  }

  export type AccreditationGroupByOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    certificateNumber: string
    sessionNQADate: Date
    _count: AccreditationCountAggregateOutputType | null
    _avg: AccreditationAvgAggregateOutputType | null
    _sum: AccreditationSumAggregateOutputType | null
    _min: AccreditationMinAggregateOutputType | null
    _max: AccreditationMaxAggregateOutputType | null
  }

  type GetAccreditationGroupByPayload<T extends AccreditationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccreditationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccreditationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccreditationGroupByOutputType[P]>
            : GetScalarType<T[P], AccreditationGroupByOutputType[P]>
        }
      >
    >


  export type AccreditationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    certificateNumber?: boolean
    sessionNQADate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accreditation"]>

  export type AccreditationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    certificateNumber?: boolean
    sessionNQADate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accreditation"]>

  export type AccreditationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    certificateNumber?: boolean
    sessionNQADate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accreditation"]>

  export type AccreditationSelectScalar = {
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    certificateNumber?: boolean
    sessionNQADate?: boolean
  }

  export type AccreditationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalQualificationId" | "qualificationCenterId" | "certificateNumber" | "sessionNQADate", ExtArgs["result"]["accreditation"]>
  export type AccreditationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type AccreditationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type AccreditationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }

  export type $AccreditationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accreditation"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalQualificationId: number
      qualificationCenterId: number
      certificateNumber: string
      sessionNQADate: Date
    }, ExtArgs["result"]["accreditation"]>
    composites: {}
  }

  type AccreditationGetPayload<S extends boolean | null | undefined | AccreditationDefaultArgs> = $Result.GetResult<Prisma.$AccreditationPayload, S>

  type AccreditationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccreditationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccreditationCountAggregateInputType | true
    }

  export interface AccreditationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accreditation'], meta: { name: 'Accreditation' } }
    /**
     * Find zero or one Accreditation that matches the filter.
     * @param {AccreditationFindUniqueArgs} args - Arguments to find a Accreditation
     * @example
     * // Get one Accreditation
     * const accreditation = await prisma.accreditation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccreditationFindUniqueArgs>(args: SelectSubset<T, AccreditationFindUniqueArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accreditation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccreditationFindUniqueOrThrowArgs} args - Arguments to find a Accreditation
     * @example
     * // Get one Accreditation
     * const accreditation = await prisma.accreditation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccreditationFindUniqueOrThrowArgs>(args: SelectSubset<T, AccreditationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accreditation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationFindFirstArgs} args - Arguments to find a Accreditation
     * @example
     * // Get one Accreditation
     * const accreditation = await prisma.accreditation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccreditationFindFirstArgs>(args?: SelectSubset<T, AccreditationFindFirstArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accreditation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationFindFirstOrThrowArgs} args - Arguments to find a Accreditation
     * @example
     * // Get one Accreditation
     * const accreditation = await prisma.accreditation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccreditationFindFirstOrThrowArgs>(args?: SelectSubset<T, AccreditationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accreditations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accreditations
     * const accreditations = await prisma.accreditation.findMany()
     * 
     * // Get first 10 Accreditations
     * const accreditations = await prisma.accreditation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accreditationWithIdOnly = await prisma.accreditation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccreditationFindManyArgs>(args?: SelectSubset<T, AccreditationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accreditation.
     * @param {AccreditationCreateArgs} args - Arguments to create a Accreditation.
     * @example
     * // Create one Accreditation
     * const Accreditation = await prisma.accreditation.create({
     *   data: {
     *     // ... data to create a Accreditation
     *   }
     * })
     * 
     */
    create<T extends AccreditationCreateArgs>(args: SelectSubset<T, AccreditationCreateArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accreditations.
     * @param {AccreditationCreateManyArgs} args - Arguments to create many Accreditations.
     * @example
     * // Create many Accreditations
     * const accreditation = await prisma.accreditation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccreditationCreateManyArgs>(args?: SelectSubset<T, AccreditationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accreditations and returns the data saved in the database.
     * @param {AccreditationCreateManyAndReturnArgs} args - Arguments to create many Accreditations.
     * @example
     * // Create many Accreditations
     * const accreditation = await prisma.accreditation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accreditations and only return the `id`
     * const accreditationWithIdOnly = await prisma.accreditation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccreditationCreateManyAndReturnArgs>(args?: SelectSubset<T, AccreditationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accreditation.
     * @param {AccreditationDeleteArgs} args - Arguments to delete one Accreditation.
     * @example
     * // Delete one Accreditation
     * const Accreditation = await prisma.accreditation.delete({
     *   where: {
     *     // ... filter to delete one Accreditation
     *   }
     * })
     * 
     */
    delete<T extends AccreditationDeleteArgs>(args: SelectSubset<T, AccreditationDeleteArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accreditation.
     * @param {AccreditationUpdateArgs} args - Arguments to update one Accreditation.
     * @example
     * // Update one Accreditation
     * const accreditation = await prisma.accreditation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccreditationUpdateArgs>(args: SelectSubset<T, AccreditationUpdateArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accreditations.
     * @param {AccreditationDeleteManyArgs} args - Arguments to filter Accreditations to delete.
     * @example
     * // Delete a few Accreditations
     * const { count } = await prisma.accreditation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccreditationDeleteManyArgs>(args?: SelectSubset<T, AccreditationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accreditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accreditations
     * const accreditation = await prisma.accreditation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccreditationUpdateManyArgs>(args: SelectSubset<T, AccreditationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accreditations and returns the data updated in the database.
     * @param {AccreditationUpdateManyAndReturnArgs} args - Arguments to update many Accreditations.
     * @example
     * // Update many Accreditations
     * const accreditation = await prisma.accreditation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accreditations and only return the `id`
     * const accreditationWithIdOnly = await prisma.accreditation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccreditationUpdateManyAndReturnArgs>(args: SelectSubset<T, AccreditationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accreditation.
     * @param {AccreditationUpsertArgs} args - Arguments to update or create a Accreditation.
     * @example
     * // Update or create a Accreditation
     * const accreditation = await prisma.accreditation.upsert({
     *   create: {
     *     // ... data to create a Accreditation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accreditation we want to update
     *   }
     * })
     */
    upsert<T extends AccreditationUpsertArgs>(args: SelectSubset<T, AccreditationUpsertArgs<ExtArgs>>): Prisma__AccreditationClient<$Result.GetResult<Prisma.$AccreditationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accreditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationCountArgs} args - Arguments to filter Accreditations to count.
     * @example
     * // Count the number of Accreditations
     * const count = await prisma.accreditation.count({
     *   where: {
     *     // ... the filter for the Accreditations we want to count
     *   }
     * })
    **/
    count<T extends AccreditationCountArgs>(
      args?: Subset<T, AccreditationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccreditationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accreditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccreditationAggregateArgs>(args: Subset<T, AccreditationAggregateArgs>): Prisma.PrismaPromise<GetAccreditationAggregateType<T>>

    /**
     * Group by Accreditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationGroupByArgs} args - Group by arguments.
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
      T extends AccreditationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccreditationGroupByArgs['orderBy'] }
        : { orderBy?: AccreditationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccreditationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccreditationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accreditation model
   */
  readonly fields: AccreditationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accreditation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccreditationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qualificationCenter<T extends QualificationCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenterDefaultArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Accreditation model
   */
  interface AccreditationFieldRefs {
    readonly id: FieldRef<"Accreditation", 'Int'>
    readonly professionalQualificationId: FieldRef<"Accreditation", 'Int'>
    readonly qualificationCenterId: FieldRef<"Accreditation", 'Int'>
    readonly certificateNumber: FieldRef<"Accreditation", 'String'>
    readonly sessionNQADate: FieldRef<"Accreditation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accreditation findUnique
   */
  export type AccreditationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter, which Accreditation to fetch.
     */
    where: AccreditationWhereUniqueInput
  }

  /**
   * Accreditation findUniqueOrThrow
   */
  export type AccreditationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter, which Accreditation to fetch.
     */
    where: AccreditationWhereUniqueInput
  }

  /**
   * Accreditation findFirst
   */
  export type AccreditationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter, which Accreditation to fetch.
     */
    where?: AccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accreditations to fetch.
     */
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accreditations.
     */
    cursor?: AccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accreditations.
     */
    distinct?: AccreditationScalarFieldEnum | AccreditationScalarFieldEnum[]
  }

  /**
   * Accreditation findFirstOrThrow
   */
  export type AccreditationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter, which Accreditation to fetch.
     */
    where?: AccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accreditations to fetch.
     */
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accreditations.
     */
    cursor?: AccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accreditations.
     */
    distinct?: AccreditationScalarFieldEnum | AccreditationScalarFieldEnum[]
  }

  /**
   * Accreditation findMany
   */
  export type AccreditationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter, which Accreditations to fetch.
     */
    where?: AccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accreditations to fetch.
     */
    orderBy?: AccreditationOrderByWithRelationInput | AccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accreditations.
     */
    cursor?: AccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accreditations.
     */
    skip?: number
    distinct?: AccreditationScalarFieldEnum | AccreditationScalarFieldEnum[]
  }

  /**
   * Accreditation create
   */
  export type AccreditationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * The data needed to create a Accreditation.
     */
    data: XOR<AccreditationCreateInput, AccreditationUncheckedCreateInput>
  }

  /**
   * Accreditation createMany
   */
  export type AccreditationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accreditations.
     */
    data: AccreditationCreateManyInput | AccreditationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accreditation createManyAndReturn
   */
  export type AccreditationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * The data used to create many Accreditations.
     */
    data: AccreditationCreateManyInput | AccreditationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accreditation update
   */
  export type AccreditationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * The data needed to update a Accreditation.
     */
    data: XOR<AccreditationUpdateInput, AccreditationUncheckedUpdateInput>
    /**
     * Choose, which Accreditation to update.
     */
    where: AccreditationWhereUniqueInput
  }

  /**
   * Accreditation updateMany
   */
  export type AccreditationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accreditations.
     */
    data: XOR<AccreditationUpdateManyMutationInput, AccreditationUncheckedUpdateManyInput>
    /**
     * Filter which Accreditations to update
     */
    where?: AccreditationWhereInput
    /**
     * Limit how many Accreditations to update.
     */
    limit?: number
  }

  /**
   * Accreditation updateManyAndReturn
   */
  export type AccreditationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * The data used to update Accreditations.
     */
    data: XOR<AccreditationUpdateManyMutationInput, AccreditationUncheckedUpdateManyInput>
    /**
     * Filter which Accreditations to update
     */
    where?: AccreditationWhereInput
    /**
     * Limit how many Accreditations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accreditation upsert
   */
  export type AccreditationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * The filter to search for the Accreditation to update in case it exists.
     */
    where: AccreditationWhereUniqueInput
    /**
     * In case the Accreditation found by the `where` argument doesn't exist, create a new Accreditation with this data.
     */
    create: XOR<AccreditationCreateInput, AccreditationUncheckedCreateInput>
    /**
     * In case the Accreditation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccreditationUpdateInput, AccreditationUncheckedUpdateInput>
  }

  /**
   * Accreditation delete
   */
  export type AccreditationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
    /**
     * Filter which Accreditation to delete.
     */
    where: AccreditationWhereUniqueInput
  }

  /**
   * Accreditation deleteMany
   */
  export type AccreditationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accreditations to delete
     */
    where?: AccreditationWhereInput
    /**
     * Limit how many Accreditations to delete.
     */
    limit?: number
  }

  /**
   * Accreditation without action
   */
  export type AccreditationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accreditation
     */
    select?: AccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accreditation
     */
    omit?: AccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    dateReceived: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    dateReceived: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    fullName: number
    qualificationCenterId: number
    professionalQualificationId: number
    dateReceived: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    dateReceived?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    dateReceived?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    dateReceived?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    dateReceived: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    dateReceived?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    dateReceived?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    dateReceived?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    dateReceived?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "qualificationCenterId" | "professionalQualificationId" | "dateReceived", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      qualificationCenterId: number
      professionalQualificationId: number
      dateReceived: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qualificationCenter<T extends QualificationCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenterDefaultArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly fullName: FieldRef<"Person", 'String'>
    readonly qualificationCenterId: FieldRef<"Person", 'Int'>
    readonly professionalQualificationId: FieldRef<"Person", 'Int'>
    readonly dateReceived: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Expert
   */

  export type AggregateExpert = {
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  export type ExpertAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
  }

  export type ExpertSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
  }

  export type ExpertMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    professionalQualificationId: number | null
  }

  export type ExpertMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    professionalQualificationId: number | null
  }

  export type ExpertCountAggregateOutputType = {
    id: number
    fullName: number
    professionalQualificationId: number
    _all: number
  }


  export type ExpertAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
  }

  export type ExpertSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
  }

  export type ExpertMinAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
  }

  export type ExpertMaxAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
  }

  export type ExpertCountAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
    _all?: true
  }

  export type ExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expert to aggregate.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experts
    **/
    _count?: true | ExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertMaxAggregateInputType
  }

  export type GetExpertAggregateType<T extends ExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpert[P]>
      : GetScalarType<T[P], AggregateExpert[P]>
  }




  export type ExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithAggregationInput | ExpertOrderByWithAggregationInput[]
    by: ExpertScalarFieldEnum[] | ExpertScalarFieldEnum
    having?: ExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertCountAggregateInputType | true
    _avg?: ExpertAvgAggregateInputType
    _sum?: ExpertSumAggregateInputType
    _min?: ExpertMinAggregateInputType
    _max?: ExpertMaxAggregateInputType
  }

  export type ExpertGroupByOutputType = {
    id: number
    fullName: string
    professionalQualificationId: number
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  type GetExpertGroupByPayload<T extends ExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    examinations?: boolean | Expert$examinationsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectScalar = {
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
  }

  export type ExpertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "professionalQualificationId", ExtArgs["result"]["expert"]>
  export type ExpertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    examinations?: boolean | Expert$examinationsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }
  export type ExpertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
  }

  export type $ExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expert"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      professionalQualificationId: number
    }, ExtArgs["result"]["expert"]>
    composites: {}
  }

  type ExpertGetPayload<S extends boolean | null | undefined | ExpertDefaultArgs> = $Result.GetResult<Prisma.$ExpertPayload, S>

  type ExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertCountAggregateInputType | true
    }

  export interface ExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expert'], meta: { name: 'Expert' } }
    /**
     * Find zero or one Expert that matches the filter.
     * @param {ExpertFindUniqueArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertFindUniqueArgs>(args: SelectSubset<T, ExpertFindUniqueArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertFindUniqueOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertFindFirstArgs>(args?: SelectSubset<T, ExpertFindFirstArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experts
     * const experts = await prisma.expert.findMany()
     * 
     * // Get first 10 Experts
     * const experts = await prisma.expert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertWithIdOnly = await prisma.expert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertFindManyArgs>(args?: SelectSubset<T, ExpertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expert.
     * @param {ExpertCreateArgs} args - Arguments to create a Expert.
     * @example
     * // Create one Expert
     * const Expert = await prisma.expert.create({
     *   data: {
     *     // ... data to create a Expert
     *   }
     * })
     * 
     */
    create<T extends ExpertCreateArgs>(args: SelectSubset<T, ExpertCreateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experts.
     * @param {ExpertCreateManyArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertCreateManyArgs>(args?: SelectSubset<T, ExpertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experts and returns the data saved in the database.
     * @param {ExpertCreateManyAndReturnArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experts and only return the `id`
     * const expertWithIdOnly = await prisma.expert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expert.
     * @param {ExpertDeleteArgs} args - Arguments to delete one Expert.
     * @example
     * // Delete one Expert
     * const Expert = await prisma.expert.delete({
     *   where: {
     *     // ... filter to delete one Expert
     *   }
     * })
     * 
     */
    delete<T extends ExpertDeleteArgs>(args: SelectSubset<T, ExpertDeleteArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expert.
     * @param {ExpertUpdateArgs} args - Arguments to update one Expert.
     * @example
     * // Update one Expert
     * const expert = await prisma.expert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertUpdateArgs>(args: SelectSubset<T, ExpertUpdateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experts.
     * @param {ExpertDeleteManyArgs} args - Arguments to filter Experts to delete.
     * @example
     * // Delete a few Experts
     * const { count } = await prisma.expert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertDeleteManyArgs>(args?: SelectSubset<T, ExpertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertUpdateManyArgs>(args: SelectSubset<T, ExpertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts and returns the data updated in the database.
     * @param {ExpertUpdateManyAndReturnArgs} args - Arguments to update many Experts.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experts and only return the `id`
     * const expertWithIdOnly = await prisma.expert.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpertUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expert.
     * @param {ExpertUpsertArgs} args - Arguments to update or create a Expert.
     * @example
     * // Update or create a Expert
     * const expert = await prisma.expert.upsert({
     *   create: {
     *     // ... data to create a Expert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expert we want to update
     *   }
     * })
     */
    upsert<T extends ExpertUpsertArgs>(args: SelectSubset<T, ExpertUpsertArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertCountArgs} args - Arguments to filter Experts to count.
     * @example
     * // Count the number of Experts
     * const count = await prisma.expert.count({
     *   where: {
     *     // ... the filter for the Experts we want to count
     *   }
     * })
    **/
    count<T extends ExpertCountArgs>(
      args?: Subset<T, ExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertAggregateArgs>(args: Subset<T, ExpertAggregateArgs>): Prisma.PrismaPromise<GetExpertAggregateType<T>>

    /**
     * Group by Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertGroupByArgs} args - Group by arguments.
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
      T extends ExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertGroupByArgs['orderBy'] }
        : { orderBy?: ExpertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expert model
   */
  readonly fields: ExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examinations<T extends Expert$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Expert model
   */
  interface ExpertFieldRefs {
    readonly id: FieldRef<"Expert", 'Int'>
    readonly fullName: FieldRef<"Expert", 'String'>
    readonly professionalQualificationId: FieldRef<"Expert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expert findUnique
   */
  export type ExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findUniqueOrThrow
   */
  export type ExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findFirst
   */
  export type ExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findFirstOrThrow
   */
  export type ExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findMany
   */
  export type ExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Experts to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert create
   */
  export type ExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to create a Expert.
     */
    data: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
  }

  /**
   * Expert createMany
   */
  export type ExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expert createManyAndReturn
   */
  export type ExpertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expert update
   */
  export type ExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to update a Expert.
     */
    data: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
    /**
     * Choose, which Expert to update.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert updateMany
   */
  export type ExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to update.
     */
    limit?: number
  }

  /**
   * Expert updateManyAndReturn
   */
  export type ExpertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expert upsert
   */
  export type ExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The filter to search for the Expert to update in case it exists.
     */
    where: ExpertWhereUniqueInput
    /**
     * In case the Expert found by the `where` argument doesn't exist, create a new Expert with this data.
     */
    create: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
    /**
     * In case the Expert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
  }

  /**
   * Expert delete
   */
  export type ExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter which Expert to delete.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert deleteMany
   */
  export type ExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experts to delete
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to delete.
     */
    limit?: number
  }

  /**
   * Expert.examinations
   */
  export type Expert$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Expert without action
   */
  export type ExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
  }


  /**
   * Model Examination
   */

  export type AggregateExamination = {
    _count: ExaminationCountAggregateOutputType | null
    _avg: ExaminationAvgAggregateOutputType | null
    _sum: ExaminationSumAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  export type ExaminationAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    expertId: number | null
  }

  export type ExaminationSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    expertId: number | null
  }

  export type ExaminationMinAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    expertId: number | null
    examinationDate: Date | null
  }

  export type ExaminationMaxAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    expertId: number | null
    examinationDate: Date | null
  }

  export type ExaminationCountAggregateOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertId: number
    examinationDate: number
    _all: number
  }


  export type ExaminationAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    expertId?: true
  }

  export type ExaminationSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    expertId?: true
  }

  export type ExaminationMinAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    expertId?: true
    examinationDate?: true
  }

  export type ExaminationMaxAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    expertId?: true
    examinationDate?: true
  }

  export type ExaminationCountAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    expertId?: true
    examinationDate?: true
    _all?: true
  }

  export type ExaminationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examination to aggregate.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examinations
    **/
    _count?: true | ExaminationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExaminationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExaminationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExaminationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExaminationMaxAggregateInputType
  }

  export type GetExaminationAggregateType<T extends ExaminationAggregateArgs> = {
        [P in keyof T & keyof AggregateExamination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamination[P]>
      : GetScalarType<T[P], AggregateExamination[P]>
  }




  export type ExaminationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithAggregationInput | ExaminationOrderByWithAggregationInput[]
    by: ExaminationScalarFieldEnum[] | ExaminationScalarFieldEnum
    having?: ExaminationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExaminationCountAggregateInputType | true
    _avg?: ExaminationAvgAggregateInputType
    _sum?: ExaminationSumAggregateInputType
    _min?: ExaminationMinAggregateInputType
    _max?: ExaminationMaxAggregateInputType
  }

  export type ExaminationGroupByOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertId: number
    examinationDate: Date
    _count: ExaminationCountAggregateOutputType | null
    _avg: ExaminationAvgAggregateOutputType | null
    _sum: ExaminationSumAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  type GetExaminationGroupByPayload<T extends ExaminationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExaminationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExaminationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
            : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
        }
      >
    >


  export type ExaminationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    expertId?: boolean
    examinationDate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    expertId?: boolean
    examinationDate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    expertId?: boolean
    examinationDate?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>

  export type ExaminationSelectScalar = {
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    expertId?: boolean
    examinationDate?: boolean
  }

  export type ExaminationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalQualificationId" | "qualificationCenterId" | "expertId" | "examinationDate", ExtArgs["result"]["examination"]>
  export type ExaminationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ExaminationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ExaminationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $ExaminationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examination"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
      expert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalQualificationId: number
      qualificationCenterId: number
      expertId: number
      examinationDate: Date
    }, ExtArgs["result"]["examination"]>
    composites: {}
  }

  type ExaminationGetPayload<S extends boolean | null | undefined | ExaminationDefaultArgs> = $Result.GetResult<Prisma.$ExaminationPayload, S>

  type ExaminationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExaminationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExaminationCountAggregateInputType | true
    }

  export interface ExaminationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Examination'], meta: { name: 'Examination' } }
    /**
     * Find zero or one Examination that matches the filter.
     * @param {ExaminationFindUniqueArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExaminationFindUniqueArgs>(args: SelectSubset<T, ExaminationFindUniqueArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExaminationFindUniqueOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExaminationFindUniqueOrThrowArgs>(args: SelectSubset<T, ExaminationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExaminationFindFirstArgs>(args?: SelectSubset<T, ExaminationFindFirstArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExaminationFindFirstOrThrowArgs>(args?: SelectSubset<T, ExaminationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examinations
     * const examinations = await prisma.examination.findMany()
     * 
     * // Get first 10 Examinations
     * const examinations = await prisma.examination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examinationWithIdOnly = await prisma.examination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExaminationFindManyArgs>(args?: SelectSubset<T, ExaminationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examination.
     * @param {ExaminationCreateArgs} args - Arguments to create a Examination.
     * @example
     * // Create one Examination
     * const Examination = await prisma.examination.create({
     *   data: {
     *     // ... data to create a Examination
     *   }
     * })
     * 
     */
    create<T extends ExaminationCreateArgs>(args: SelectSubset<T, ExaminationCreateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examinations.
     * @param {ExaminationCreateManyArgs} args - Arguments to create many Examinations.
     * @example
     * // Create many Examinations
     * const examination = await prisma.examination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExaminationCreateManyArgs>(args?: SelectSubset<T, ExaminationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examinations and returns the data saved in the database.
     * @param {ExaminationCreateManyAndReturnArgs} args - Arguments to create many Examinations.
     * @example
     * // Create many Examinations
     * const examination = await prisma.examination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examinations and only return the `id`
     * const examinationWithIdOnly = await prisma.examination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExaminationCreateManyAndReturnArgs>(args?: SelectSubset<T, ExaminationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Examination.
     * @param {ExaminationDeleteArgs} args - Arguments to delete one Examination.
     * @example
     * // Delete one Examination
     * const Examination = await prisma.examination.delete({
     *   where: {
     *     // ... filter to delete one Examination
     *   }
     * })
     * 
     */
    delete<T extends ExaminationDeleteArgs>(args: SelectSubset<T, ExaminationDeleteArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examination.
     * @param {ExaminationUpdateArgs} args - Arguments to update one Examination.
     * @example
     * // Update one Examination
     * const examination = await prisma.examination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExaminationUpdateArgs>(args: SelectSubset<T, ExaminationUpdateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examinations.
     * @param {ExaminationDeleteManyArgs} args - Arguments to filter Examinations to delete.
     * @example
     * // Delete a few Examinations
     * const { count } = await prisma.examination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExaminationDeleteManyArgs>(args?: SelectSubset<T, ExaminationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examinations
     * const examination = await prisma.examination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExaminationUpdateManyArgs>(args: SelectSubset<T, ExaminationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examinations and returns the data updated in the database.
     * @param {ExaminationUpdateManyAndReturnArgs} args - Arguments to update many Examinations.
     * @example
     * // Update many Examinations
     * const examination = await prisma.examination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examinations and only return the `id`
     * const examinationWithIdOnly = await prisma.examination.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExaminationUpdateManyAndReturnArgs>(args: SelectSubset<T, ExaminationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Examination.
     * @param {ExaminationUpsertArgs} args - Arguments to update or create a Examination.
     * @example
     * // Update or create a Examination
     * const examination = await prisma.examination.upsert({
     *   create: {
     *     // ... data to create a Examination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examination we want to update
     *   }
     * })
     */
    upsert<T extends ExaminationUpsertArgs>(args: SelectSubset<T, ExaminationUpsertArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationCountArgs} args - Arguments to filter Examinations to count.
     * @example
     * // Count the number of Examinations
     * const count = await prisma.examination.count({
     *   where: {
     *     // ... the filter for the Examinations we want to count
     *   }
     * })
    **/
    count<T extends ExaminationCountArgs>(
      args?: Subset<T, ExaminationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExaminationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExaminationAggregateArgs>(args: Subset<T, ExaminationAggregateArgs>): Prisma.PrismaPromise<GetExaminationAggregateType<T>>

    /**
     * Group by Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationGroupByArgs} args - Group by arguments.
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
      T extends ExaminationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExaminationGroupByArgs['orderBy'] }
        : { orderBy?: ExaminationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExaminationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExaminationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Examination model
   */
  readonly fields: ExaminationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Examination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExaminationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qualificationCenter<T extends QualificationCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenterDefaultArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Examination model
   */
  interface ExaminationFieldRefs {
    readonly id: FieldRef<"Examination", 'Int'>
    readonly professionalQualificationId: FieldRef<"Examination", 'Int'>
    readonly qualificationCenterId: FieldRef<"Examination", 'Int'>
    readonly expertId: FieldRef<"Examination", 'Int'>
    readonly examinationDate: FieldRef<"Examination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Examination findUnique
   */
  export type ExaminationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findUniqueOrThrow
   */
  export type ExaminationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findFirst
   */
  export type ExaminationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findFirstOrThrow
   */
  export type ExaminationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findMany
   */
  export type ExaminationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examinations to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination create
   */
  export type ExaminationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to create a Examination.
     */
    data: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
  }

  /**
   * Examination createMany
   */
  export type ExaminationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examinations.
     */
    data: ExaminationCreateManyInput | ExaminationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Examination createManyAndReturn
   */
  export type ExaminationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * The data used to create many Examinations.
     */
    data: ExaminationCreateManyInput | ExaminationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examination update
   */
  export type ExaminationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to update a Examination.
     */
    data: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
    /**
     * Choose, which Examination to update.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination updateMany
   */
  export type ExaminationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examinations.
     */
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyInput>
    /**
     * Filter which Examinations to update
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to update.
     */
    limit?: number
  }

  /**
   * Examination updateManyAndReturn
   */
  export type ExaminationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * The data used to update Examinations.
     */
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyInput>
    /**
     * Filter which Examinations to update
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Examination upsert
   */
  export type ExaminationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The filter to search for the Examination to update in case it exists.
     */
    where: ExaminationWhereUniqueInput
    /**
     * In case the Examination found by the `where` argument doesn't exist, create a new Examination with this data.
     */
    create: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
    /**
     * In case the Examination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
  }

  /**
   * Examination delete
   */
  export type ExaminationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter which Examination to delete.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination deleteMany
   */
  export type ExaminationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examinations to delete
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to delete.
     */
    limit?: number
  }

  /**
   * Examination without action
   */
  export type ExaminationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
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


  export const DeveloperScalarFieldEnum: {
    id: 'id',
    name: 'name',
    edrpou: 'edrpou'
  };

  export type DeveloperScalarFieldEnum = (typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    developerId: 'developerId',
    approvalDate: 'approvalDate'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const ProfessionalQualificationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nkrLevel: 'nkrLevel',
    professionId: 'professionId'
  };

  export type ProfessionalQualificationScalarFieldEnum = (typeof ProfessionalQualificationScalarFieldEnum)[keyof typeof ProfessionalQualificationScalarFieldEnum]


  export const QualificationCenterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    edrpou: 'edrpou',
    address: 'address'
  };

  export type QualificationCenterScalarFieldEnum = (typeof QualificationCenterScalarFieldEnum)[keyof typeof QualificationCenterScalarFieldEnum]


  export const AccreditationScalarFieldEnum: {
    id: 'id',
    professionalQualificationId: 'professionalQualificationId',
    qualificationCenterId: 'qualificationCenterId',
    certificateNumber: 'certificateNumber',
    sessionNQADate: 'sessionNQADate'
  };

  export type AccreditationScalarFieldEnum = (typeof AccreditationScalarFieldEnum)[keyof typeof AccreditationScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    qualificationCenterId: 'qualificationCenterId',
    professionalQualificationId: 'professionalQualificationId',
    dateReceived: 'dateReceived'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const ExpertScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    professionalQualificationId: 'professionalQualificationId'
  };

  export type ExpertScalarFieldEnum = (typeof ExpertScalarFieldEnum)[keyof typeof ExpertScalarFieldEnum]


  export const ExaminationScalarFieldEnum: {
    id: 'id',
    professionalQualificationId: 'professionalQualificationId',
    qualificationCenterId: 'qualificationCenterId',
    expertId: 'expertId',
    examinationDate: 'examinationDate'
  };

  export type ExaminationScalarFieldEnum = (typeof ExaminationScalarFieldEnum)[keyof typeof ExaminationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DeveloperWhereInput = {
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    id?: IntFilter<"Developer"> | number
    name?: StringFilter<"Developer"> | string
    edrpou?: StringNullableFilter<"Developer"> | string | null
    professions?: ProfessionListRelationFilter
  }

  export type DeveloperOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrderInput | SortOrder
    professions?: ProfessionOrderByRelationAggregateInput
  }

  export type DeveloperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeveloperWhereInput | DeveloperWhereInput[]
    OR?: DeveloperWhereInput[]
    NOT?: DeveloperWhereInput | DeveloperWhereInput[]
    name?: StringFilter<"Developer"> | string
    edrpou?: StringNullableFilter<"Developer"> | string | null
    professions?: ProfessionListRelationFilter
  }, "id">

  export type DeveloperOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrderInput | SortOrder
    _count?: DeveloperCountOrderByAggregateInput
    _avg?: DeveloperAvgOrderByAggregateInput
    _max?: DeveloperMaxOrderByAggregateInput
    _min?: DeveloperMinOrderByAggregateInput
    _sum?: DeveloperSumOrderByAggregateInput
  }

  export type DeveloperScalarWhereWithAggregatesInput = {
    AND?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    OR?: DeveloperScalarWhereWithAggregatesInput[]
    NOT?: DeveloperScalarWhereWithAggregatesInput | DeveloperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Developer"> | number
    name?: StringWithAggregatesFilter<"Developer"> | string
    edrpou?: StringNullableWithAggregatesFilter<"Developer"> | string | null
  }

  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    id?: IntFilter<"Profession"> | number
    name?: StringFilter<"Profession"> | string
    code?: StringFilter<"Profession"> | string
    developerId?: IntFilter<"Profession"> | number
    approvalDate?: DateTimeFilter<"Profession"> | Date | string
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
    professionalQualifications?: ProfessionalQualificationListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
    developer?: DeveloperOrderByWithRelationInput
    professionalQualifications?: ProfessionalQualificationOrderByRelationAggregateInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    name?: StringFilter<"Profession"> | string
    code?: StringFilter<"Profession"> | string
    developerId?: IntFilter<"Profession"> | number
    approvalDate?: DateTimeFilter<"Profession"> | Date | string
    developer?: XOR<DeveloperScalarRelationFilter, DeveloperWhereInput>
    professionalQualifications?: ProfessionalQualificationListRelationFilter
  }, "id">

  export type ProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _avg?: ProfessionAvgOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
    _sum?: ProfessionSumOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profession"> | number
    name?: StringWithAggregatesFilter<"Profession"> | string
    code?: StringWithAggregatesFilter<"Profession"> | string
    developerId?: IntWithAggregatesFilter<"Profession"> | number
    approvalDate?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
  }

  export type ProfessionalQualificationWhereInput = {
    AND?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    OR?: ProfessionalQualificationWhereInput[]
    NOT?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    id?: IntFilter<"ProfessionalQualification"> | number
    name?: StringFilter<"ProfessionalQualification"> | string
    nkrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    accreditations?: AccreditationListRelationFilter
    persons?: PersonListRelationFilter
    experts?: ExpertListRelationFilter
    examinations?: ExaminationListRelationFilter
  }

  export type ProfessionalQualificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
    profession?: ProfessionOrderByWithRelationInput
    accreditations?: AccreditationOrderByRelationAggregateInput
    persons?: PersonOrderByRelationAggregateInput
    experts?: ExpertOrderByRelationAggregateInput
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type ProfessionalQualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    OR?: ProfessionalQualificationWhereInput[]
    NOT?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    name?: StringFilter<"ProfessionalQualification"> | string
    nkrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    accreditations?: AccreditationListRelationFilter
    persons?: PersonListRelationFilter
    experts?: ExpertListRelationFilter
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type ProfessionalQualificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
    _count?: ProfessionalQualificationCountOrderByAggregateInput
    _avg?: ProfessionalQualificationAvgOrderByAggregateInput
    _max?: ProfessionalQualificationMaxOrderByAggregateInput
    _min?: ProfessionalQualificationMinOrderByAggregateInput
    _sum?: ProfessionalQualificationSumOrderByAggregateInput
  }

  export type ProfessionalQualificationScalarWhereWithAggregatesInput = {
    AND?: ProfessionalQualificationScalarWhereWithAggregatesInput | ProfessionalQualificationScalarWhereWithAggregatesInput[]
    OR?: ProfessionalQualificationScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalQualificationScalarWhereWithAggregatesInput | ProfessionalQualificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfessionalQualification"> | number
    name?: StringWithAggregatesFilter<"ProfessionalQualification"> | string
    nkrLevel?: IntWithAggregatesFilter<"ProfessionalQualification"> | number
    professionId?: IntWithAggregatesFilter<"ProfessionalQualification"> | number
  }

  export type QualificationCenterWhereInput = {
    AND?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    OR?: QualificationCenterWhereInput[]
    NOT?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    id?: IntFilter<"QualificationCenter"> | number
    name?: StringFilter<"QualificationCenter"> | string
    edrpou?: StringFilter<"QualificationCenter"> | string
    address?: StringFilter<"QualificationCenter"> | string
    accreditations?: AccreditationListRelationFilter
    persons?: PersonListRelationFilter
    examinations?: ExaminationListRelationFilter
  }

  export type QualificationCenterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
    accreditations?: AccreditationOrderByRelationAggregateInput
    persons?: PersonOrderByRelationAggregateInput
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type QualificationCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    OR?: QualificationCenterWhereInput[]
    NOT?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    name?: StringFilter<"QualificationCenter"> | string
    edrpou?: StringFilter<"QualificationCenter"> | string
    address?: StringFilter<"QualificationCenter"> | string
    accreditations?: AccreditationListRelationFilter
    persons?: PersonListRelationFilter
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type QualificationCenterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
    _count?: QualificationCenterCountOrderByAggregateInput
    _avg?: QualificationCenterAvgOrderByAggregateInput
    _max?: QualificationCenterMaxOrderByAggregateInput
    _min?: QualificationCenterMinOrderByAggregateInput
    _sum?: QualificationCenterSumOrderByAggregateInput
  }

  export type QualificationCenterScalarWhereWithAggregatesInput = {
    AND?: QualificationCenterScalarWhereWithAggregatesInput | QualificationCenterScalarWhereWithAggregatesInput[]
    OR?: QualificationCenterScalarWhereWithAggregatesInput[]
    NOT?: QualificationCenterScalarWhereWithAggregatesInput | QualificationCenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QualificationCenter"> | number
    name?: StringWithAggregatesFilter<"QualificationCenter"> | string
    edrpou?: StringWithAggregatesFilter<"QualificationCenter"> | string
    address?: StringWithAggregatesFilter<"QualificationCenter"> | string
  }

  export type AccreditationWhereInput = {
    AND?: AccreditationWhereInput | AccreditationWhereInput[]
    OR?: AccreditationWhereInput[]
    NOT?: AccreditationWhereInput | AccreditationWhereInput[]
    id?: IntFilter<"Accreditation"> | number
    professionalQualificationId?: IntFilter<"Accreditation"> | number
    qualificationCenterId?: IntFilter<"Accreditation"> | number
    certificateNumber?: StringFilter<"Accreditation"> | string
    sessionNQADate?: DateTimeFilter<"Accreditation"> | Date | string
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }

  export type AccreditationOrderByWithRelationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    certificateNumber?: SortOrder
    sessionNQADate?: SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
  }

  export type AccreditationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    professionalQualificationId_qualificationCenterId_certificateNumber?: AccreditationProfessionalQualificationIdQualificationCenterIdCertificateNumberCompoundUniqueInput
    AND?: AccreditationWhereInput | AccreditationWhereInput[]
    OR?: AccreditationWhereInput[]
    NOT?: AccreditationWhereInput | AccreditationWhereInput[]
    professionalQualificationId?: IntFilter<"Accreditation"> | number
    qualificationCenterId?: IntFilter<"Accreditation"> | number
    certificateNumber?: StringFilter<"Accreditation"> | string
    sessionNQADate?: DateTimeFilter<"Accreditation"> | Date | string
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }, "id" | "professionalQualificationId_qualificationCenterId_certificateNumber">

  export type AccreditationOrderByWithAggregationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    certificateNumber?: SortOrder
    sessionNQADate?: SortOrder
    _count?: AccreditationCountOrderByAggregateInput
    _avg?: AccreditationAvgOrderByAggregateInput
    _max?: AccreditationMaxOrderByAggregateInput
    _min?: AccreditationMinOrderByAggregateInput
    _sum?: AccreditationSumOrderByAggregateInput
  }

  export type AccreditationScalarWhereWithAggregatesInput = {
    AND?: AccreditationScalarWhereWithAggregatesInput | AccreditationScalarWhereWithAggregatesInput[]
    OR?: AccreditationScalarWhereWithAggregatesInput[]
    NOT?: AccreditationScalarWhereWithAggregatesInput | AccreditationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accreditation"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"Accreditation"> | number
    qualificationCenterId?: IntWithAggregatesFilter<"Accreditation"> | number
    certificateNumber?: StringWithAggregatesFilter<"Accreditation"> | string
    sessionNQADate?: DateTimeWithAggregatesFilter<"Accreditation"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    fullName?: StringFilter<"Person"> | string
    qualificationCenterId?: IntFilter<"Person"> | number
    professionalQualificationId?: IntFilter<"Person"> | number
    dateReceived?: DateTimeFilter<"Person"> | Date | string
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    dateReceived?: SortOrder
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    fullName?: StringFilter<"Person"> | string
    qualificationCenterId?: IntFilter<"Person"> | number
    professionalQualificationId?: IntFilter<"Person"> | number
    dateReceived?: DateTimeFilter<"Person"> | Date | string
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
  }, "id">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    dateReceived?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    fullName?: StringWithAggregatesFilter<"Person"> | string
    qualificationCenterId?: IntWithAggregatesFilter<"Person"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"Person"> | number
    dateReceived?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type ExpertWhereInput = {
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    id?: IntFilter<"Expert"> | number
    fullName?: StringFilter<"Expert"> | string
    professionalQualificationId?: IntFilter<"Expert"> | number
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    examinations?: ExaminationListRelationFilter
  }

  export type ExpertOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type ExpertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    fullName?: StringFilter<"Expert"> | string
    professionalQualificationId?: IntFilter<"Expert"> | number
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type ExpertOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    _count?: ExpertCountOrderByAggregateInput
    _avg?: ExpertAvgOrderByAggregateInput
    _max?: ExpertMaxOrderByAggregateInput
    _min?: ExpertMinOrderByAggregateInput
    _sum?: ExpertSumOrderByAggregateInput
  }

  export type ExpertScalarWhereWithAggregatesInput = {
    AND?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    OR?: ExpertScalarWhereWithAggregatesInput[]
    NOT?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expert"> | number
    fullName?: StringWithAggregatesFilter<"Expert"> | string
    professionalQualificationId?: IntWithAggregatesFilter<"Expert"> | number
  }

  export type ExaminationWhereInput = {
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    id?: IntFilter<"Examination"> | number
    professionalQualificationId?: IntFilter<"Examination"> | number
    qualificationCenterId?: IntFilter<"Examination"> | number
    expertId?: IntFilter<"Examination"> | number
    examinationDate?: DateTimeFilter<"Examination"> | Date | string
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
  }

  export type ExaminationOrderByWithRelationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
    examinationDate?: SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
    expert?: ExpertOrderByWithRelationInput
  }

  export type ExaminationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    professionalQualificationId?: IntFilter<"Examination"> | number
    qualificationCenterId?: IntFilter<"Examination"> | number
    expertId?: IntFilter<"Examination"> | number
    examinationDate?: DateTimeFilter<"Examination"> | Date | string
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
  }, "id">

  export type ExaminationOrderByWithAggregationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
    examinationDate?: SortOrder
    _count?: ExaminationCountOrderByAggregateInput
    _avg?: ExaminationAvgOrderByAggregateInput
    _max?: ExaminationMaxOrderByAggregateInput
    _min?: ExaminationMinOrderByAggregateInput
    _sum?: ExaminationSumOrderByAggregateInput
  }

  export type ExaminationScalarWhereWithAggregatesInput = {
    AND?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    OR?: ExaminationScalarWhereWithAggregatesInput[]
    NOT?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Examination"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"Examination"> | number
    qualificationCenterId?: IntWithAggregatesFilter<"Examination"> | number
    expertId?: IntWithAggregatesFilter<"Examination"> | number
    examinationDate?: DateTimeWithAggregatesFilter<"Examination"> | Date | string
  }

  export type DeveloperCreateInput = {
    name: string
    edrpou?: string | null
    professions?: ProfessionCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperUncheckedCreateInput = {
    id?: number
    name: string
    edrpou?: string | null
    professions?: ProfessionUncheckedCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
    professions?: ProfessionUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
    professions?: ProfessionUncheckedUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperCreateManyInput = {
    id?: number
    name: string
    edrpou?: string | null
  }

  export type DeveloperUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeveloperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionCreateInput = {
    name: string
    code: string
    approvalDate?: Date | string
    developer: DeveloperCreateNestedOneWithoutProfessionsInput
    professionalQualifications?: ProfessionalQualificationCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    developerId: number
    approvalDate?: Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    developer?: DeveloperUpdateOneRequiredWithoutProfessionsNestedInput
    professionalQualifications?: ProfessionalQualificationUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    developerId?: IntFieldUpdateOperationsInput | number
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    id?: number
    name: string
    code: string
    developerId: number
    approvalDate?: Date | string
  }

  export type ProfessionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    developerId?: IntFieldUpdateOperationsInput | number
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalQualificationCreateInput = {
    name: string
    nkrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    accreditations?: AccreditationCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    accreditations?: AccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationCreateManyInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
  }

  export type ProfessionalQualificationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalQualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationCenterCreateInput = {
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationCreateNestedManyWithoutQualificationCenterInput
    persons?: PersonCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    persons?: PersonUncheckedCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUpdateManyWithoutQualificationCenterNestedInput
    persons?: PersonUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    persons?: PersonUncheckedUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterCreateManyInput = {
    id?: number
    name: string
    edrpou: string
    address: string
  }

  export type QualificationCenterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationCenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AccreditationCreateInput = {
    certificateNumber: string
    sessionNQADate?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutAccreditationsInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutAccreditationsInput
  }

  export type AccreditationUncheckedCreateInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type AccreditationUpdateInput = {
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutAccreditationsNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutAccreditationsNestedInput
  }

  export type AccreditationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationCreateManyInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type AccreditationUpdateManyMutationInput = {
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    fullName: string
    dateReceived?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutPersonsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    dateReceived?: Date | string
  }

  export type PersonUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutPersonsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManyInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    dateReceived?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertCreateInput = {
    fullName: string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutExpertsInput
    examinations?: ExaminationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    examinations?: ExaminationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutExpertsNestedInput
    examinations?: ExaminationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    examinations?: ExaminationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertCreateManyInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
  }

  export type ExpertUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
  }

  export type ExaminationCreateInput = {
    examinationDate?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutExaminationsInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutExaminationsInput
    expert: ExpertCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type ExaminationUpdateInput = {
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutExaminationsNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutExaminationsNestedInput
    expert?: ExpertUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManyInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type ExaminationUpdateManyMutationInput = {
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProfessionListRelationFilter = {
    every?: ProfessionWhereInput
    some?: ProfessionWhereInput
    none?: ProfessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeveloperCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type DeveloperAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeveloperMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type DeveloperMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type DeveloperSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DeveloperScalarRelationFilter = {
    is?: DeveloperWhereInput
    isNot?: DeveloperWhereInput
  }

  export type ProfessionalQualificationListRelationFilter = {
    every?: ProfessionalQualificationWhereInput
    some?: ProfessionalQualificationWhereInput
    none?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
  }

  export type ProfessionAvgOrderByAggregateInput = {
    id?: SortOrder
    developerId?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
  }

  export type ProfessionSumOrderByAggregateInput = {
    id?: SortOrder
    developerId?: SortOrder
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

  export type ProfessionScalarRelationFilter = {
    is?: ProfessionWhereInput
    isNot?: ProfessionWhereInput
  }

  export type AccreditationListRelationFilter = {
    every?: AccreditationWhereInput
    some?: AccreditationWhereInput
    none?: AccreditationWhereInput
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type ExpertListRelationFilter = {
    every?: ExpertWhereInput
    some?: ExpertWhereInput
    none?: ExpertWhereInput
  }

  export type ExaminationListRelationFilter = {
    every?: ExaminationWhereInput
    some?: ExaminationWhereInput
    none?: ExaminationWhereInput
  }

  export type AccreditationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExaminationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalQualificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationAvgOrderByAggregateInput = {
    id?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationSumOrderByAggregateInput = {
    id?: SortOrder
    nkrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type QualificationCenterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
  }

  export type QualificationCenterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QualificationCenterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
  }

  export type QualificationCenterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
  }

  export type QualificationCenterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfessionalQualificationScalarRelationFilter = {
    is?: ProfessionalQualificationWhereInput
    isNot?: ProfessionalQualificationWhereInput
  }

  export type QualificationCenterScalarRelationFilter = {
    is?: QualificationCenterWhereInput
    isNot?: QualificationCenterWhereInput
  }

  export type AccreditationProfessionalQualificationIdQualificationCenterIdCertificateNumberCompoundUniqueInput = {
    professionalQualificationId: number
    qualificationCenterId: number
    certificateNumber: string
  }

  export type AccreditationCountOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    certificateNumber?: SortOrder
    sessionNQADate?: SortOrder
  }

  export type AccreditationAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type AccreditationMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    certificateNumber?: SortOrder
    sessionNQADate?: SortOrder
  }

  export type AccreditationMinOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    certificateNumber?: SortOrder
    sessionNQADate?: SortOrder
  }

  export type AccreditationSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    dateReceived?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    dateReceived?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    dateReceived?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
  }

  export type ExpertScalarRelationFilter = {
    is?: ExpertWhereInput
    isNot?: ExpertWhereInput
  }

  export type ExaminationCountOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
    examinationDate?: SortOrder
  }

  export type ExaminationAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
  }

  export type ExaminationMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
    examinationDate?: SortOrder
  }

  export type ExaminationMinOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
    examinationDate?: SortOrder
  }

  export type ExaminationSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    expertId?: SortOrder
  }

  export type ProfessionCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput> | ProfessionCreateWithoutDeveloperInput[] | ProfessionUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutDeveloperInput | ProfessionCreateOrConnectWithoutDeveloperInput[]
    createMany?: ProfessionCreateManyDeveloperInputEnvelope
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type ProfessionUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput> | ProfessionCreateWithoutDeveloperInput[] | ProfessionUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutDeveloperInput | ProfessionCreateOrConnectWithoutDeveloperInput[]
    createMany?: ProfessionCreateManyDeveloperInputEnvelope
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfessionUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput> | ProfessionCreateWithoutDeveloperInput[] | ProfessionUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutDeveloperInput | ProfessionCreateOrConnectWithoutDeveloperInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutDeveloperInput | ProfessionUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: ProfessionCreateManyDeveloperInputEnvelope
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutDeveloperInput | ProfessionUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutDeveloperInput | ProfessionUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput> | ProfessionCreateWithoutDeveloperInput[] | ProfessionUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutDeveloperInput | ProfessionCreateOrConnectWithoutDeveloperInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutDeveloperInput | ProfessionUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: ProfessionCreateManyDeveloperInputEnvelope
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutDeveloperInput | ProfessionUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutDeveloperInput | ProfessionUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type DeveloperCreateNestedOneWithoutProfessionsInput = {
    create?: XOR<DeveloperCreateWithoutProfessionsInput, DeveloperUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutProfessionsInput
    connect?: DeveloperWhereUniqueInput
  }

  export type ProfessionalQualificationCreateNestedManyWithoutProfessionInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput> | ProfessionalQualificationCreateWithoutProfessionInput[] | ProfessionalQualificationUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionInput | ProfessionalQualificationCreateOrConnectWithoutProfessionInput[]
    createMany?: ProfessionalQualificationCreateManyProfessionInputEnvelope
    connect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
  }

  export type ProfessionalQualificationUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput> | ProfessionalQualificationCreateWithoutProfessionInput[] | ProfessionalQualificationUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionInput | ProfessionalQualificationCreateOrConnectWithoutProfessionInput[]
    createMany?: ProfessionalQualificationCreateManyProfessionInputEnvelope
    connect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeveloperUpdateOneRequiredWithoutProfessionsNestedInput = {
    create?: XOR<DeveloperCreateWithoutProfessionsInput, DeveloperUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: DeveloperCreateOrConnectWithoutProfessionsInput
    upsert?: DeveloperUpsertWithoutProfessionsInput
    connect?: DeveloperWhereUniqueInput
    update?: XOR<XOR<DeveloperUpdateToOneWithWhereWithoutProfessionsInput, DeveloperUpdateWithoutProfessionsInput>, DeveloperUncheckedUpdateWithoutProfessionsInput>
  }

  export type ProfessionalQualificationUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput> | ProfessionalQualificationCreateWithoutProfessionInput[] | ProfessionalQualificationUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionInput | ProfessionalQualificationCreateOrConnectWithoutProfessionInput[]
    upsert?: ProfessionalQualificationUpsertWithWhereUniqueWithoutProfessionInput | ProfessionalQualificationUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: ProfessionalQualificationCreateManyProfessionInputEnvelope
    set?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    disconnect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    delete?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    connect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    update?: ProfessionalQualificationUpdateWithWhereUniqueWithoutProfessionInput | ProfessionalQualificationUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: ProfessionalQualificationUpdateManyWithWhereWithoutProfessionInput | ProfessionalQualificationUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: ProfessionalQualificationScalarWhereInput | ProfessionalQualificationScalarWhereInput[]
  }

  export type ProfessionalQualificationUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput> | ProfessionalQualificationCreateWithoutProfessionInput[] | ProfessionalQualificationUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionInput | ProfessionalQualificationCreateOrConnectWithoutProfessionInput[]
    upsert?: ProfessionalQualificationUpsertWithWhereUniqueWithoutProfessionInput | ProfessionalQualificationUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: ProfessionalQualificationCreateManyProfessionInputEnvelope
    set?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    disconnect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    delete?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    connect?: ProfessionalQualificationWhereUniqueInput | ProfessionalQualificationWhereUniqueInput[]
    update?: ProfessionalQualificationUpdateWithWhereUniqueWithoutProfessionInput | ProfessionalQualificationUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: ProfessionalQualificationUpdateManyWithWhereWithoutProfessionInput | ProfessionalQualificationUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: ProfessionalQualificationScalarWhereInput | ProfessionalQualificationScalarWhereInput[]
  }

  export type ProfessionCreateNestedOneWithoutProfessionalQualificationsInput = {
    create?: XOR<ProfessionCreateWithoutProfessionalQualificationsInput, ProfessionUncheckedCreateWithoutProfessionalQualificationsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionalQualificationsInput
    connect?: ProfessionWhereUniqueInput
  }

  export type AccreditationCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationCreateWithoutProfessionalQualificationInput[] | AccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutProfessionalQualificationInput | AccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: AccreditationCreateManyProfessionalQualificationInputEnvelope
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput> | PersonCreateWithoutProfessionalQualificationInput[] | PersonUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutProfessionalQualificationInput | PersonCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: PersonCreateManyProfessionalQualificationInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ExpertCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput> | ExpertCreateWithoutProfessionalQualificationInput[] | ExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutProfessionalQualificationInput | ExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ExpertCreateManyProfessionalQualificationInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExaminationCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput> | ExaminationCreateWithoutProfessionalQualificationInput[] | ExaminationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutProfessionalQualificationInput | ExaminationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ExaminationCreateManyProfessionalQualificationInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationCreateWithoutProfessionalQualificationInput[] | AccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutProfessionalQualificationInput | AccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: AccreditationCreateManyProfessionalQualificationInputEnvelope
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput> | PersonCreateWithoutProfessionalQualificationInput[] | PersonUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutProfessionalQualificationInput | PersonCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: PersonCreateManyProfessionalQualificationInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput> | ExpertCreateWithoutProfessionalQualificationInput[] | ExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutProfessionalQualificationInput | ExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ExpertCreateManyProfessionalQualificationInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput> | ExaminationCreateWithoutProfessionalQualificationInput[] | ExaminationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutProfessionalQualificationInput | ExaminationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ExaminationCreateManyProfessionalQualificationInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput = {
    create?: XOR<ProfessionCreateWithoutProfessionalQualificationsInput, ProfessionUncheckedCreateWithoutProfessionalQualificationsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionalQualificationsInput
    upsert?: ProfessionUpsertWithoutProfessionalQualificationsInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutProfessionalQualificationsInput, ProfessionUpdateWithoutProfessionalQualificationsInput>, ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput>
  }

  export type AccreditationUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationCreateWithoutProfessionalQualificationInput[] | AccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutProfessionalQualificationInput | AccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: AccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: AccreditationCreateManyProfessionalQualificationInputEnvelope
    set?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    disconnect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    delete?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    update?: AccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: AccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput | AccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput> | PersonCreateWithoutProfessionalQualificationInput[] | PersonUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutProfessionalQualificationInput | PersonCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutProfessionalQualificationInput | PersonUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: PersonCreateManyProfessionalQualificationInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutProfessionalQualificationInput | PersonUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutProfessionalQualificationInput | PersonUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ExpertUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput> | ExpertCreateWithoutProfessionalQualificationInput[] | ExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutProfessionalQualificationInput | ExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ExpertCreateManyProfessionalQualificationInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutProfessionalQualificationInput | ExpertUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExaminationUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput> | ExaminationCreateWithoutProfessionalQualificationInput[] | ExaminationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutProfessionalQualificationInput | ExaminationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ExaminationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ExaminationCreateManyProfessionalQualificationInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ExaminationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutProfessionalQualificationInput | ExaminationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationCreateWithoutProfessionalQualificationInput[] | AccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutProfessionalQualificationInput | AccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: AccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: AccreditationCreateManyProfessionalQualificationInputEnvelope
    set?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    disconnect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    delete?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    update?: AccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: AccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput | AccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput> | PersonCreateWithoutProfessionalQualificationInput[] | PersonUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutProfessionalQualificationInput | PersonCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutProfessionalQualificationInput | PersonUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: PersonCreateManyProfessionalQualificationInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutProfessionalQualificationInput | PersonUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutProfessionalQualificationInput | PersonUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput> | ExpertCreateWithoutProfessionalQualificationInput[] | ExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutProfessionalQualificationInput | ExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ExpertCreateManyProfessionalQualificationInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutProfessionalQualificationInput | ExpertUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput> | ExaminationCreateWithoutProfessionalQualificationInput[] | ExaminationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutProfessionalQualificationInput | ExaminationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ExaminationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ExaminationCreateManyProfessionalQualificationInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ExaminationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutProfessionalQualificationInput | ExaminationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type AccreditationCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput> | AccreditationCreateWithoutQualificationCenterInput[] | AccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutQualificationCenterInput | AccreditationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: AccreditationCreateManyQualificationCenterInputEnvelope
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput> | PersonCreateWithoutQualificationCenterInput[] | PersonUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutQualificationCenterInput | PersonCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: PersonCreateManyQualificationCenterInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ExaminationCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput> | ExaminationCreateWithoutQualificationCenterInput[] | ExaminationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutQualificationCenterInput | ExaminationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: ExaminationCreateManyQualificationCenterInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type AccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput> | AccreditationCreateWithoutQualificationCenterInput[] | AccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutQualificationCenterInput | AccreditationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: AccreditationCreateManyQualificationCenterInputEnvelope
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput> | PersonCreateWithoutQualificationCenterInput[] | PersonUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutQualificationCenterInput | PersonCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: PersonCreateManyQualificationCenterInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput> | ExaminationCreateWithoutQualificationCenterInput[] | ExaminationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutQualificationCenterInput | ExaminationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: ExaminationCreateManyQualificationCenterInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type AccreditationUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput> | AccreditationCreateWithoutQualificationCenterInput[] | AccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutQualificationCenterInput | AccreditationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: AccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput | AccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: AccreditationCreateManyQualificationCenterInputEnvelope
    set?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    disconnect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    delete?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    update?: AccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput | AccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: AccreditationUpdateManyWithWhereWithoutQualificationCenterInput | AccreditationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput> | PersonCreateWithoutQualificationCenterInput[] | PersonUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutQualificationCenterInput | PersonCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutQualificationCenterInput | PersonUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: PersonCreateManyQualificationCenterInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutQualificationCenterInput | PersonUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutQualificationCenterInput | PersonUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ExaminationUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput> | ExaminationCreateWithoutQualificationCenterInput[] | ExaminationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutQualificationCenterInput | ExaminationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutQualificationCenterInput | ExaminationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: ExaminationCreateManyQualificationCenterInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutQualificationCenterInput | ExaminationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutQualificationCenterInput | ExaminationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type AccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput> | AccreditationCreateWithoutQualificationCenterInput[] | AccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: AccreditationCreateOrConnectWithoutQualificationCenterInput | AccreditationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: AccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput | AccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: AccreditationCreateManyQualificationCenterInputEnvelope
    set?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    disconnect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    delete?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    connect?: AccreditationWhereUniqueInput | AccreditationWhereUniqueInput[]
    update?: AccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput | AccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: AccreditationUpdateManyWithWhereWithoutQualificationCenterInput | AccreditationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput> | PersonCreateWithoutQualificationCenterInput[] | PersonUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutQualificationCenterInput | PersonCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutQualificationCenterInput | PersonUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: PersonCreateManyQualificationCenterInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutQualificationCenterInput | PersonUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutQualificationCenterInput | PersonUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput> | ExaminationCreateWithoutQualificationCenterInput[] | ExaminationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutQualificationCenterInput | ExaminationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutQualificationCenterInput | ExaminationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: ExaminationCreateManyQualificationCenterInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutQualificationCenterInput | ExaminationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutQualificationCenterInput | ExaminationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ProfessionalQualificationCreateNestedOneWithoutAccreditationsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutAccreditationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutAccreditationsInput = {
    create?: XOR<QualificationCenterCreateWithoutAccreditationsInput, QualificationCenterUncheckedCreateWithoutAccreditationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutAccreditationsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutAccreditationsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutAccreditationsInput
    upsert?: ProfessionalQualificationUpsertWithoutAccreditationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutAccreditationsInput, ProfessionalQualificationUpdateWithoutAccreditationsInput>, ProfessionalQualificationUncheckedUpdateWithoutAccreditationsInput>
  }

  export type QualificationCenterUpdateOneRequiredWithoutAccreditationsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutAccreditationsInput, QualificationCenterUncheckedCreateWithoutAccreditationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutAccreditationsInput
    upsert?: QualificationCenterUpsertWithoutAccreditationsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutAccreditationsInput, QualificationCenterUpdateWithoutAccreditationsInput>, QualificationCenterUncheckedUpdateWithoutAccreditationsInput>
  }

  export type QualificationCenterCreateNestedOneWithoutPersonsInput = {
    create?: XOR<QualificationCenterCreateWithoutPersonsInput, QualificationCenterUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutPersonsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type ProfessionalQualificationCreateNestedOneWithoutPersonsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutPersonsInput, ProfessionalQualificationUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutPersonsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutPersonsInput, QualificationCenterUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutPersonsInput
    upsert?: QualificationCenterUpsertWithoutPersonsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutPersonsInput, QualificationCenterUpdateWithoutPersonsInput>, QualificationCenterUncheckedUpdateWithoutPersonsInput>
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutPersonsInput, ProfessionalQualificationUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutPersonsInput
    upsert?: ProfessionalQualificationUpsertWithoutPersonsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutPersonsInput, ProfessionalQualificationUpdateWithoutPersonsInput>, ProfessionalQualificationUncheckedUpdateWithoutPersonsInput>
  }

  export type ProfessionalQualificationCreateNestedOneWithoutExpertsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutExpertsInput, ProfessionalQualificationUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutExpertsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type ExaminationCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput> | ExaminationCreateWithoutExpertInput[] | ExaminationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutExpertInput | ExaminationCreateOrConnectWithoutExpertInput[]
    createMany?: ExaminationCreateManyExpertInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput> | ExaminationCreateWithoutExpertInput[] | ExaminationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutExpertInput | ExaminationCreateOrConnectWithoutExpertInput[]
    createMany?: ExaminationCreateManyExpertInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutExpertsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutExpertsInput, ProfessionalQualificationUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutExpertsInput
    upsert?: ProfessionalQualificationUpsertWithoutExpertsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutExpertsInput, ProfessionalQualificationUpdateWithoutExpertsInput>, ProfessionalQualificationUncheckedUpdateWithoutExpertsInput>
  }

  export type ExaminationUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput> | ExaminationCreateWithoutExpertInput[] | ExaminationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutExpertInput | ExaminationCreateOrConnectWithoutExpertInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutExpertInput | ExaminationUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExaminationCreateManyExpertInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutExpertInput | ExaminationUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutExpertInput | ExaminationUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput> | ExaminationCreateWithoutExpertInput[] | ExaminationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutExpertInput | ExaminationCreateOrConnectWithoutExpertInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutExpertInput | ExaminationUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExaminationCreateManyExpertInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutExpertInput | ExaminationUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutExpertInput | ExaminationUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ProfessionalQualificationCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutExaminationsInput, ProfessionalQualificationUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutExaminationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<QualificationCenterCreateWithoutExaminationsInput, QualificationCenterUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutExaminationsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type ExpertCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<ExpertCreateWithoutExaminationsInput, ExpertUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutExaminationsInput
    connect?: ExpertWhereUniqueInput
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutExaminationsInput, ProfessionalQualificationUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutExaminationsInput
    upsert?: ProfessionalQualificationUpsertWithoutExaminationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutExaminationsInput, ProfessionalQualificationUpdateWithoutExaminationsInput>, ProfessionalQualificationUncheckedUpdateWithoutExaminationsInput>
  }

  export type QualificationCenterUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutExaminationsInput, QualificationCenterUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutExaminationsInput
    upsert?: QualificationCenterUpsertWithoutExaminationsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutExaminationsInput, QualificationCenterUpdateWithoutExaminationsInput>, QualificationCenterUncheckedUpdateWithoutExaminationsInput>
  }

  export type ExpertUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<ExpertCreateWithoutExaminationsInput, ExpertUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutExaminationsInput
    upsert?: ExpertUpsertWithoutExaminationsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutExaminationsInput, ExpertUpdateWithoutExaminationsInput>, ExpertUncheckedUpdateWithoutExaminationsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ProfessionCreateWithoutDeveloperInput = {
    name: string
    code: string
    approvalDate?: Date | string
    professionalQualifications?: ProfessionalQualificationCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateWithoutDeveloperInput = {
    id?: number
    name: string
    code: string
    approvalDate?: Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionCreateOrConnectWithoutDeveloperInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput>
  }

  export type ProfessionCreateManyDeveloperInputEnvelope = {
    data: ProfessionCreateManyDeveloperInput | ProfessionCreateManyDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: ProfessionWhereUniqueInput
    update: XOR<ProfessionUpdateWithoutDeveloperInput, ProfessionUncheckedUpdateWithoutDeveloperInput>
    create: XOR<ProfessionCreateWithoutDeveloperInput, ProfessionUncheckedCreateWithoutDeveloperInput>
  }

  export type ProfessionUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: ProfessionWhereUniqueInput
    data: XOR<ProfessionUpdateWithoutDeveloperInput, ProfessionUncheckedUpdateWithoutDeveloperInput>
  }

  export type ProfessionUpdateManyWithWhereWithoutDeveloperInput = {
    where: ProfessionScalarWhereInput
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type ProfessionScalarWhereInput = {
    AND?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
    OR?: ProfessionScalarWhereInput[]
    NOT?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
    id?: IntFilter<"Profession"> | number
    name?: StringFilter<"Profession"> | string
    code?: StringFilter<"Profession"> | string
    developerId?: IntFilter<"Profession"> | number
    approvalDate?: DateTimeFilter<"Profession"> | Date | string
  }

  export type DeveloperCreateWithoutProfessionsInput = {
    name: string
    edrpou?: string | null
  }

  export type DeveloperUncheckedCreateWithoutProfessionsInput = {
    id?: number
    name: string
    edrpou?: string | null
  }

  export type DeveloperCreateOrConnectWithoutProfessionsInput = {
    where: DeveloperWhereUniqueInput
    create: XOR<DeveloperCreateWithoutProfessionsInput, DeveloperUncheckedCreateWithoutProfessionsInput>
  }

  export type ProfessionalQualificationCreateWithoutProfessionInput = {
    name: string
    nkrLevel: number
    accreditations?: AccreditationCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutProfessionInput = {
    id?: number
    name: string
    nkrLevel: number
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutProfessionInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput>
  }

  export type ProfessionalQualificationCreateManyProfessionInputEnvelope = {
    data: ProfessionalQualificationCreateManyProfessionInput | ProfessionalQualificationCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type DeveloperUpsertWithoutProfessionsInput = {
    update: XOR<DeveloperUpdateWithoutProfessionsInput, DeveloperUncheckedUpdateWithoutProfessionsInput>
    create: XOR<DeveloperCreateWithoutProfessionsInput, DeveloperUncheckedCreateWithoutProfessionsInput>
    where?: DeveloperWhereInput
  }

  export type DeveloperUpdateToOneWithWhereWithoutProfessionsInput = {
    where?: DeveloperWhereInput
    data: XOR<DeveloperUpdateWithoutProfessionsInput, DeveloperUncheckedUpdateWithoutProfessionsInput>
  }

  export type DeveloperUpdateWithoutProfessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeveloperUncheckedUpdateWithoutProfessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessionalQualificationUpsertWithWhereUniqueWithoutProfessionInput = {
    where: ProfessionalQualificationWhereUniqueInput
    update: XOR<ProfessionalQualificationUpdateWithoutProfessionInput, ProfessionalQualificationUncheckedUpdateWithoutProfessionInput>
    create: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput>
  }

  export type ProfessionalQualificationUpdateWithWhereUniqueWithoutProfessionInput = {
    where: ProfessionalQualificationWhereUniqueInput
    data: XOR<ProfessionalQualificationUpdateWithoutProfessionInput, ProfessionalQualificationUncheckedUpdateWithoutProfessionInput>
  }

  export type ProfessionalQualificationUpdateManyWithWhereWithoutProfessionInput = {
    where: ProfessionalQualificationScalarWhereInput
    data: XOR<ProfessionalQualificationUpdateManyMutationInput, ProfessionalQualificationUncheckedUpdateManyWithoutProfessionInput>
  }

  export type ProfessionalQualificationScalarWhereInput = {
    AND?: ProfessionalQualificationScalarWhereInput | ProfessionalQualificationScalarWhereInput[]
    OR?: ProfessionalQualificationScalarWhereInput[]
    NOT?: ProfessionalQualificationScalarWhereInput | ProfessionalQualificationScalarWhereInput[]
    id?: IntFilter<"ProfessionalQualification"> | number
    name?: StringFilter<"ProfessionalQualification"> | string
    nkrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
  }

  export type ProfessionCreateWithoutProfessionalQualificationsInput = {
    name: string
    code: string
    approvalDate?: Date | string
    developer: DeveloperCreateNestedOneWithoutProfessionsInput
  }

  export type ProfessionUncheckedCreateWithoutProfessionalQualificationsInput = {
    id?: number
    name: string
    code: string
    developerId: number
    approvalDate?: Date | string
  }

  export type ProfessionCreateOrConnectWithoutProfessionalQualificationsInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutProfessionalQualificationsInput, ProfessionUncheckedCreateWithoutProfessionalQualificationsInput>
  }

  export type AccreditationCreateWithoutProfessionalQualificationInput = {
    certificateNumber: string
    sessionNQADate?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutAccreditationsInput
  }

  export type AccreditationUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type AccreditationCreateOrConnectWithoutProfessionalQualificationInput = {
    where: AccreditationWhereUniqueInput
    create: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type AccreditationCreateManyProfessionalQualificationInputEnvelope = {
    data: AccreditationCreateManyProfessionalQualificationInput | AccreditationCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutProfessionalQualificationInput = {
    fullName: string
    dateReceived?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    dateReceived?: Date | string
  }

  export type PersonCreateOrConnectWithoutProfessionalQualificationInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type PersonCreateManyProfessionalQualificationInputEnvelope = {
    data: PersonCreateManyProfessionalQualificationInput | PersonCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type ExpertCreateWithoutProfessionalQualificationInput = {
    fullName: string
    examinations?: ExaminationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    fullName: string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutProfessionalQualificationInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ExpertCreateManyProfessionalQualificationInputEnvelope = {
    data: ExpertCreateManyProfessionalQualificationInput | ExpertCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type ExaminationCreateWithoutProfessionalQualificationInput = {
    examinationDate?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutExaminationsInput
    expert: ExpertCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type ExaminationCreateOrConnectWithoutProfessionalQualificationInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ExaminationCreateManyProfessionalQualificationInputEnvelope = {
    data: ExaminationCreateManyProfessionalQualificationInput | ExaminationCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionUpsertWithoutProfessionalQualificationsInput = {
    update: XOR<ProfessionUpdateWithoutProfessionalQualificationsInput, ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput>
    create: XOR<ProfessionCreateWithoutProfessionalQualificationsInput, ProfessionUncheckedCreateWithoutProfessionalQualificationsInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutProfessionalQualificationsInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutProfessionalQualificationsInput, ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput>
  }

  export type ProfessionUpdateWithoutProfessionalQualificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    developer?: DeveloperUpdateOneRequiredWithoutProfessionsNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    developerId?: IntFieldUpdateOperationsInput | number
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: AccreditationWhereUniqueInput
    update: XOR<AccreditationUpdateWithoutProfessionalQualificationInput, AccreditationUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<AccreditationCreateWithoutProfessionalQualificationInput, AccreditationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type AccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: AccreditationWhereUniqueInput
    data: XOR<AccreditationUpdateWithoutProfessionalQualificationInput, AccreditationUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type AccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: AccreditationScalarWhereInput
    data: XOR<AccreditationUpdateManyMutationInput, AccreditationUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type AccreditationScalarWhereInput = {
    AND?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
    OR?: AccreditationScalarWhereInput[]
    NOT?: AccreditationScalarWhereInput | AccreditationScalarWhereInput[]
    id?: IntFilter<"Accreditation"> | number
    professionalQualificationId?: IntFilter<"Accreditation"> | number
    qualificationCenterId?: IntFilter<"Accreditation"> | number
    certificateNumber?: StringFilter<"Accreditation"> | string
    sessionNQADate?: DateTimeFilter<"Accreditation"> | Date | string
  }

  export type PersonUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutProfessionalQualificationInput, PersonUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<PersonCreateWithoutProfessionalQualificationInput, PersonUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutProfessionalQualificationInput, PersonUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type PersonUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: IntFilter<"Person"> | number
    fullName?: StringFilter<"Person"> | string
    qualificationCenterId?: IntFilter<"Person"> | number
    professionalQualificationId?: IntFilter<"Person"> | number
    dateReceived?: DateTimeFilter<"Person"> | Date | string
  }

  export type ExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ExpertWhereUniqueInput
    update: XOR<ExpertUpdateWithoutProfessionalQualificationInput, ExpertUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<ExpertCreateWithoutProfessionalQualificationInput, ExpertUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ExpertWhereUniqueInput
    data: XOR<ExpertUpdateWithoutProfessionalQualificationInput, ExpertUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type ExpertUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: ExpertScalarWhereInput
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type ExpertScalarWhereInput = {
    AND?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    OR?: ExpertScalarWhereInput[]
    NOT?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    id?: IntFilter<"Expert"> | number
    fullName?: StringFilter<"Expert"> | string
    professionalQualificationId?: IntFilter<"Expert"> | number
  }

  export type ExaminationUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutProfessionalQualificationInput, ExaminationUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<ExaminationCreateWithoutProfessionalQualificationInput, ExaminationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutProfessionalQualificationInput, ExaminationUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type ExaminationScalarWhereInput = {
    AND?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    OR?: ExaminationScalarWhereInput[]
    NOT?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    id?: IntFilter<"Examination"> | number
    professionalQualificationId?: IntFilter<"Examination"> | number
    qualificationCenterId?: IntFilter<"Examination"> | number
    expertId?: IntFilter<"Examination"> | number
    examinationDate?: DateTimeFilter<"Examination"> | Date | string
  }

  export type AccreditationCreateWithoutQualificationCenterInput = {
    certificateNumber: string
    sessionNQADate?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutAccreditationsInput
  }

  export type AccreditationUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type AccreditationCreateOrConnectWithoutQualificationCenterInput = {
    where: AccreditationWhereUniqueInput
    create: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type AccreditationCreateManyQualificationCenterInputEnvelope = {
    data: AccreditationCreateManyQualificationCenterInput | AccreditationCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutQualificationCenterInput = {
    fullName: string
    dateReceived?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    dateReceived?: Date | string
  }

  export type PersonCreateOrConnectWithoutQualificationCenterInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput>
  }

  export type PersonCreateManyQualificationCenterInputEnvelope = {
    data: PersonCreateManyQualificationCenterInput | PersonCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type ExaminationCreateWithoutQualificationCenterInput = {
    examinationDate?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutExaminationsInput
    expert: ExpertCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type ExaminationCreateOrConnectWithoutQualificationCenterInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type ExaminationCreateManyQualificationCenterInputEnvelope = {
    data: ExaminationCreateManyQualificationCenterInput | ExaminationCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type AccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: AccreditationWhereUniqueInput
    update: XOR<AccreditationUpdateWithoutQualificationCenterInput, AccreditationUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<AccreditationCreateWithoutQualificationCenterInput, AccreditationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type AccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: AccreditationWhereUniqueInput
    data: XOR<AccreditationUpdateWithoutQualificationCenterInput, AccreditationUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type AccreditationUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: AccreditationScalarWhereInput
    data: XOR<AccreditationUpdateManyMutationInput, AccreditationUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type PersonUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutQualificationCenterInput, PersonUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<PersonCreateWithoutQualificationCenterInput, PersonUncheckedCreateWithoutQualificationCenterInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutQualificationCenterInput, PersonUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type PersonUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type ExaminationUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutQualificationCenterInput, ExaminationUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<ExaminationCreateWithoutQualificationCenterInput, ExaminationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutQualificationCenterInput, ExaminationUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type ProfessionalQualificationCreateWithoutAccreditationsInput = {
    name: string
    nkrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    persons?: PersonCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutAccreditationsInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
    persons?: PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutAccreditationsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationsInput>
  }

  export type QualificationCenterCreateWithoutAccreditationsInput = {
    name: string
    edrpou: string
    address: string
    persons?: PersonCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutAccreditationsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    persons?: PersonUncheckedCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutAccreditationsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutAccreditationsInput, QualificationCenterUncheckedCreateWithoutAccreditationsInput>
  }

  export type ProfessionalQualificationUpsertWithoutAccreditationsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutAccreditationsInput, ProfessionalQualificationUncheckedUpdateWithoutAccreditationsInput>
    create: XOR<ProfessionalQualificationCreateWithoutAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutAccreditationsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutAccreditationsInput, ProfessionalQualificationUncheckedUpdateWithoutAccreditationsInput>
  }

  export type ProfessionalQualificationUpdateWithoutAccreditationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    persons?: PersonUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutAccreditationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    persons?: PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterUpsertWithoutAccreditationsInput = {
    update: XOR<QualificationCenterUpdateWithoutAccreditationsInput, QualificationCenterUncheckedUpdateWithoutAccreditationsInput>
    create: XOR<QualificationCenterCreateWithoutAccreditationsInput, QualificationCenterUncheckedCreateWithoutAccreditationsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutAccreditationsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutAccreditationsInput, QualificationCenterUncheckedUpdateWithoutAccreditationsInput>
  }

  export type QualificationCenterUpdateWithoutAccreditationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    persons?: PersonUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutAccreditationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    persons?: PersonUncheckedUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterCreateWithoutPersonsInput = {
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutPersonsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutPersonsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutPersonsInput, QualificationCenterUncheckedCreateWithoutPersonsInput>
  }

  export type ProfessionalQualificationCreateWithoutPersonsInput = {
    name: string
    nkrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    accreditations?: AccreditationCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutPersonsInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutPersonsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutPersonsInput, ProfessionalQualificationUncheckedCreateWithoutPersonsInput>
  }

  export type QualificationCenterUpsertWithoutPersonsInput = {
    update: XOR<QualificationCenterUpdateWithoutPersonsInput, QualificationCenterUncheckedUpdateWithoutPersonsInput>
    create: XOR<QualificationCenterCreateWithoutPersonsInput, QualificationCenterUncheckedCreateWithoutPersonsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutPersonsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutPersonsInput, QualificationCenterUncheckedUpdateWithoutPersonsInput>
  }

  export type QualificationCenterUpdateWithoutPersonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type ProfessionalQualificationUpsertWithoutPersonsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutPersonsInput, ProfessionalQualificationUncheckedUpdateWithoutPersonsInput>
    create: XOR<ProfessionalQualificationCreateWithoutPersonsInput, ProfessionalQualificationUncheckedCreateWithoutPersonsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutPersonsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutPersonsInput, ProfessionalQualificationUncheckedUpdateWithoutPersonsInput>
  }

  export type ProfessionalQualificationUpdateWithoutPersonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    accreditations?: AccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationCreateWithoutExpertsInput = {
    name: string
    nkrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    accreditations?: AccreditationCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutExpertsInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    examinations?: ExaminationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutExpertsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutExpertsInput, ProfessionalQualificationUncheckedCreateWithoutExpertsInput>
  }

  export type ExaminationCreateWithoutExpertInput = {
    examinationDate?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutExaminationsInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateWithoutExpertInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    examinationDate?: Date | string
  }

  export type ExaminationCreateOrConnectWithoutExpertInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput>
  }

  export type ExaminationCreateManyExpertInputEnvelope = {
    data: ExaminationCreateManyExpertInput | ExaminationCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalQualificationUpsertWithoutExpertsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutExpertsInput, ProfessionalQualificationUncheckedUpdateWithoutExpertsInput>
    create: XOR<ProfessionalQualificationCreateWithoutExpertsInput, ProfessionalQualificationUncheckedCreateWithoutExpertsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutExpertsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutExpertsInput, ProfessionalQualificationUncheckedUpdateWithoutExpertsInput>
  }

  export type ProfessionalQualificationUpdateWithoutExpertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    accreditations?: AccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutExpertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ExaminationUpsertWithWhereUniqueWithoutExpertInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutExpertInput, ExaminationUncheckedUpdateWithoutExpertInput>
    create: XOR<ExaminationCreateWithoutExpertInput, ExaminationUncheckedCreateWithoutExpertInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutExpertInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutExpertInput, ExaminationUncheckedUpdateWithoutExpertInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutExpertInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutExpertInput>
  }

  export type ProfessionalQualificationCreateWithoutExaminationsInput = {
    name: string
    nkrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    accreditations?: AccreditationCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutExaminationsInput = {
    id?: number
    name: string
    nkrLevel: number
    professionId: number
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    persons?: PersonUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    experts?: ExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutExaminationsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutExaminationsInput, ProfessionalQualificationUncheckedCreateWithoutExaminationsInput>
  }

  export type QualificationCenterCreateWithoutExaminationsInput = {
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationCreateNestedManyWithoutQualificationCenterInput
    persons?: PersonCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutExaminationsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    accreditations?: AccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    persons?: PersonUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutExaminationsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutExaminationsInput, QualificationCenterUncheckedCreateWithoutExaminationsInput>
  }

  export type ExpertCreateWithoutExaminationsInput = {
    fullName: string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutExpertsInput
  }

  export type ExpertUncheckedCreateWithoutExaminationsInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
  }

  export type ExpertCreateOrConnectWithoutExaminationsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutExaminationsInput, ExpertUncheckedCreateWithoutExaminationsInput>
  }

  export type ProfessionalQualificationUpsertWithoutExaminationsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutExaminationsInput, ProfessionalQualificationUncheckedUpdateWithoutExaminationsInput>
    create: XOR<ProfessionalQualificationCreateWithoutExaminationsInput, ProfessionalQualificationUncheckedCreateWithoutExaminationsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutExaminationsInput, ProfessionalQualificationUncheckedUpdateWithoutExaminationsInput>
  }

  export type ProfessionalQualificationUpdateWithoutExaminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    accreditations?: AccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutExaminationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterUpsertWithoutExaminationsInput = {
    update: XOR<QualificationCenterUpdateWithoutExaminationsInput, QualificationCenterUncheckedUpdateWithoutExaminationsInput>
    create: XOR<QualificationCenterCreateWithoutExaminationsInput, QualificationCenterUncheckedCreateWithoutExaminationsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutExaminationsInput, QualificationCenterUncheckedUpdateWithoutExaminationsInput>
  }

  export type QualificationCenterUpdateWithoutExaminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUpdateManyWithoutQualificationCenterNestedInput
    persons?: PersonUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutExaminationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    accreditations?: AccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    persons?: PersonUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type ExpertUpsertWithoutExaminationsInput = {
    update: XOR<ExpertUpdateWithoutExaminationsInput, ExpertUncheckedUpdateWithoutExaminationsInput>
    create: XOR<ExpertCreateWithoutExaminationsInput, ExpertUncheckedCreateWithoutExaminationsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutExaminationsInput, ExpertUncheckedUpdateWithoutExaminationsInput>
  }

  export type ExpertUpdateWithoutExaminationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutExpertsNestedInput
  }

  export type ExpertUncheckedUpdateWithoutExaminationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionCreateManyDeveloperInput = {
    id?: number
    name: string
    code: string
    approvalDate?: Date | string
  }

  export type ProfessionUpdateWithoutDeveloperInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualifications?: ProfessionalQualificationUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateManyWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalQualificationCreateManyProfessionInput = {
    id?: number
    name: string
    nkrLevel: number
  }

  export type ProfessionalQualificationUpdateWithoutProfessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutProfessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
    accreditations?: AccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    persons?: PersonUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    experts?: ExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    examinations?: ExaminationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateManyWithoutProfessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nkrLevel?: IntFieldUpdateOperationsInput | number
  }

  export type AccreditationCreateManyProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type PersonCreateManyProfessionalQualificationInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    dateReceived?: Date | string
  }

  export type ExpertCreateManyProfessionalQualificationInput = {
    id?: number
    fullName: string
  }

  export type ExaminationCreateManyProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type AccreditationUpdateWithoutProfessionalQualificationInput = {
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutAccreditationsNestedInput
  }

  export type AccreditationUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpdateWithoutProfessionalQualificationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUpdateWithoutProfessionalQualificationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    examinations?: ExaminationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    examinations?: ExaminationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type ExaminationUpdateWithoutProfessionalQualificationInput = {
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutExaminationsNestedInput
    expert?: ExpertUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationCreateManyQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    certificateNumber: string
    sessionNQADate?: Date | string
  }

  export type PersonCreateManyQualificationCenterInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    dateReceived?: Date | string
  }

  export type ExaminationCreateManyQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    expertId: number
    examinationDate?: Date | string
  }

  export type AccreditationUpdateWithoutQualificationCenterInput = {
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutAccreditationsNestedInput
  }

  export type AccreditationUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    sessionNQADate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpdateWithoutQualificationCenterInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    dateReceived?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUpdateWithoutQualificationCenterInput = {
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutExaminationsNestedInput
    expert?: ExpertUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManyExpertInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    examinationDate?: Date | string
  }

  export type ExaminationUpdateWithoutExpertInput = {
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutExaminationsNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    examinationDate?: DateTimeFieldUpdateOperationsInput | Date | string
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