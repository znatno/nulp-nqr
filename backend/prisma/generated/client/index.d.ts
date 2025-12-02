
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model QualificationStandardDeveloper
 * 
 */
export type QualificationStandardDeveloper = $Result.DefaultSelection<Prisma.$QualificationStandardDeveloperPayload>
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
 * Model QualificationCenterAccreditation
 * 
 */
export type QualificationCenterAccreditation = $Result.DefaultSelection<Prisma.$QualificationCenterAccreditationPayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>
/**
 * Model AccreditationExpert
 * 
 */
export type AccreditationExpert = $Result.DefaultSelection<Prisma.$AccreditationExpertPayload>
/**
 * Model QualificationCenterExpertise
 * 
 */
export type QualificationCenterExpertise = $Result.DefaultSelection<Prisma.$QualificationCenterExpertisePayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model TestSession
 * 
 */
export type TestSession = $Result.DefaultSelection<Prisma.$TestSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VIEWER: 'VIEWER',
  USER: 'USER',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AccreditationStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type AccreditationStatus = (typeof AccreditationStatus)[keyof typeof AccreditationStatus]


export const ApplicationStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  SCHEDULED: 'SCHEDULED',
  TESTED: 'TESTED',
  APPROVED: 'APPROVED',
  REFUSED: 'REFUSED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const TestResult: {
  PENDING: 'PENDING',
  PASSED: 'PASSED',
  FAILED: 'FAILED'
};

export type TestResult = (typeof TestResult)[keyof typeof TestResult]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AccreditationStatus = $Enums.AccreditationStatus

export const AccreditationStatus: typeof $Enums.AccreditationStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type TestResult = $Enums.TestResult

export const TestResult: typeof $Enums.TestResult

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
   * `prisma.qualificationStandardDeveloper`: Exposes CRUD operations for the **QualificationStandardDeveloper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualificationStandardDevelopers
    * const qualificationStandardDevelopers = await prisma.qualificationStandardDeveloper.findMany()
    * ```
    */
  get qualificationStandardDeveloper(): Prisma.QualificationStandardDeveloperDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.qualificationCenterAccreditation`: Exposes CRUD operations for the **QualificationCenterAccreditation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualificationCenterAccreditations
    * const qualificationCenterAccreditations = await prisma.qualificationCenterAccreditation.findMany()
    * ```
    */
  get qualificationCenterAccreditation(): Prisma.QualificationCenterAccreditationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accreditationExpert`: Exposes CRUD operations for the **AccreditationExpert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccreditationExperts
    * const accreditationExperts = await prisma.accreditationExpert.findMany()
    * ```
    */
  get accreditationExpert(): Prisma.AccreditationExpertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualificationCenterExpertise`: Exposes CRUD operations for the **QualificationCenterExpertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualificationCenterExpertises
    * const qualificationCenterExpertises = await prisma.qualificationCenterExpertise.findMany()
    * ```
    */
  get qualificationCenterExpertise(): Prisma.QualificationCenterExpertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testSession`: Exposes CRUD operations for the **TestSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestSessions
    * const testSessions = await prisma.testSession.findMany()
    * ```
    */
  get testSession(): Prisma.TestSessionDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    QualificationStandardDeveloper: 'QualificationStandardDeveloper',
    Profession: 'Profession',
    ProfessionalQualification: 'ProfessionalQualification',
    QualificationCenter: 'QualificationCenter',
    QualificationCenterAccreditation: 'QualificationCenterAccreditation',
    Professional: 'Professional',
    AccreditationExpert: 'AccreditationExpert',
    QualificationCenterExpertise: 'QualificationCenterExpertise',
    Application: 'Application',
    TestSession: 'TestSession'
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
      modelProps: "user" | "qualificationStandardDeveloper" | "profession" | "professionalQualification" | "qualificationCenter" | "qualificationCenterAccreditation" | "professional" | "accreditationExpert" | "qualificationCenterExpertise" | "application" | "testSession"
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
      QualificationStandardDeveloper: {
        payload: Prisma.$QualificationStandardDeveloperPayload<ExtArgs>
        fields: Prisma.QualificationStandardDeveloperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationStandardDeveloperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationStandardDeveloperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          findFirst: {
            args: Prisma.QualificationStandardDeveloperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationStandardDeveloperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          findMany: {
            args: Prisma.QualificationStandardDeveloperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>[]
          }
          create: {
            args: Prisma.QualificationStandardDeveloperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          createMany: {
            args: Prisma.QualificationStandardDeveloperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualificationStandardDeveloperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>[]
          }
          delete: {
            args: Prisma.QualificationStandardDeveloperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          update: {
            args: Prisma.QualificationStandardDeveloperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          deleteMany: {
            args: Prisma.QualificationStandardDeveloperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationStandardDeveloperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualificationStandardDeveloperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>[]
          }
          upsert: {
            args: Prisma.QualificationStandardDeveloperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationStandardDeveloperPayload>
          }
          aggregate: {
            args: Prisma.QualificationStandardDeveloperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualificationStandardDeveloper>
          }
          groupBy: {
            args: Prisma.QualificationStandardDeveloperGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationStandardDeveloperGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationStandardDeveloperCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationStandardDeveloperCountAggregateOutputType> | number
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
      QualificationCenterAccreditation: {
        payload: Prisma.$QualificationCenterAccreditationPayload<ExtArgs>
        fields: Prisma.QualificationCenterAccreditationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationCenterAccreditationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationCenterAccreditationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          findFirst: {
            args: Prisma.QualificationCenterAccreditationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationCenterAccreditationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          findMany: {
            args: Prisma.QualificationCenterAccreditationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>[]
          }
          create: {
            args: Prisma.QualificationCenterAccreditationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          createMany: {
            args: Prisma.QualificationCenterAccreditationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualificationCenterAccreditationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>[]
          }
          delete: {
            args: Prisma.QualificationCenterAccreditationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          update: {
            args: Prisma.QualificationCenterAccreditationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          deleteMany: {
            args: Prisma.QualificationCenterAccreditationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationCenterAccreditationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualificationCenterAccreditationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>[]
          }
          upsert: {
            args: Prisma.QualificationCenterAccreditationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterAccreditationPayload>
          }
          aggregate: {
            args: Prisma.QualificationCenterAccreditationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualificationCenterAccreditation>
          }
          groupBy: {
            args: Prisma.QualificationCenterAccreditationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterAccreditationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationCenterAccreditationCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterAccreditationCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
          }
        }
      }
      AccreditationExpert: {
        payload: Prisma.$AccreditationExpertPayload<ExtArgs>
        fields: Prisma.AccreditationExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccreditationExpertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccreditationExpertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          findFirst: {
            args: Prisma.AccreditationExpertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccreditationExpertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          findMany: {
            args: Prisma.AccreditationExpertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>[]
          }
          create: {
            args: Prisma.AccreditationExpertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          createMany: {
            args: Prisma.AccreditationExpertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccreditationExpertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>[]
          }
          delete: {
            args: Prisma.AccreditationExpertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          update: {
            args: Prisma.AccreditationExpertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          deleteMany: {
            args: Prisma.AccreditationExpertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccreditationExpertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccreditationExpertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>[]
          }
          upsert: {
            args: Prisma.AccreditationExpertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccreditationExpertPayload>
          }
          aggregate: {
            args: Prisma.AccreditationExpertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccreditationExpert>
          }
          groupBy: {
            args: Prisma.AccreditationExpertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccreditationExpertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccreditationExpertCountArgs<ExtArgs>
            result: $Utils.Optional<AccreditationExpertCountAggregateOutputType> | number
          }
        }
      }
      QualificationCenterExpertise: {
        payload: Prisma.$QualificationCenterExpertisePayload<ExtArgs>
        fields: Prisma.QualificationCenterExpertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationCenterExpertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationCenterExpertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          findFirst: {
            args: Prisma.QualificationCenterExpertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationCenterExpertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          findMany: {
            args: Prisma.QualificationCenterExpertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>[]
          }
          create: {
            args: Prisma.QualificationCenterExpertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          createMany: {
            args: Prisma.QualificationCenterExpertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualificationCenterExpertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>[]
          }
          delete: {
            args: Prisma.QualificationCenterExpertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          update: {
            args: Prisma.QualificationCenterExpertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          deleteMany: {
            args: Prisma.QualificationCenterExpertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationCenterExpertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualificationCenterExpertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>[]
          }
          upsert: {
            args: Prisma.QualificationCenterExpertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationCenterExpertisePayload>
          }
          aggregate: {
            args: Prisma.QualificationCenterExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualificationCenterExpertise>
          }
          groupBy: {
            args: Prisma.QualificationCenterExpertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationCenterExpertiseCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationCenterExpertiseCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      TestSession: {
        payload: Prisma.$TestSessionPayload<ExtArgs>
        fields: Prisma.TestSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          findFirst: {
            args: Prisma.TestSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          findMany: {
            args: Prisma.TestSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>[]
          }
          create: {
            args: Prisma.TestSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          createMany: {
            args: Prisma.TestSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>[]
          }
          delete: {
            args: Prisma.TestSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          update: {
            args: Prisma.TestSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          deleteMany: {
            args: Prisma.TestSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>[]
          }
          upsert: {
            args: Prisma.TestSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSessionPayload>
          }
          aggregate: {
            args: Prisma.TestSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestSession>
          }
          groupBy: {
            args: Prisma.TestSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TestSessionCountAggregateOutputType> | number
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
    user?: UserOmit
    qualificationStandardDeveloper?: QualificationStandardDeveloperOmit
    profession?: ProfessionOmit
    professionalQualification?: ProfessionalQualificationOmit
    qualificationCenter?: QualificationCenterOmit
    qualificationCenterAccreditation?: QualificationCenterAccreditationOmit
    professional?: ProfessionalOmit
    accreditationExpert?: AccreditationExpertOmit
    qualificationCenterExpertise?: QualificationCenterExpertiseOmit
    application?: ApplicationOmit
    testSession?: TestSessionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    professionals: number
    accreditationExperts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    professionals?: boolean | UserCountOutputTypeCountProfessionalsArgs
    accreditationExperts?: boolean | UserCountOutputTypeCountAccreditationExpertsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccreditationExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationExpertWhereInput
  }


  /**
   * Count Type QualificationStandardDeveloperCountOutputType
   */

  export type QualificationStandardDeveloperCountOutputType = {
    professions: number
  }

  export type QualificationStandardDeveloperCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | QualificationStandardDeveloperCountOutputTypeCountProfessionsArgs
  }

  // Custom InputTypes
  /**
   * QualificationStandardDeveloperCountOutputType without action
   */
  export type QualificationStandardDeveloperCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloperCountOutputType
     */
    select?: QualificationStandardDeveloperCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QualificationStandardDeveloperCountOutputType without action
   */
  export type QualificationStandardDeveloperCountOutputTypeCountProfessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    qualificationCenterAccreditations: number
    professionals: number
    accreditationExperts: number
    qualificationCenterExpertises: number
    applications: number
  }

  export type ProfessionalQualificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenterAccreditations?: boolean | ProfessionalQualificationCountOutputTypeCountQualificationCenterAccreditationsArgs
    professionals?: boolean | ProfessionalQualificationCountOutputTypeCountProfessionalsArgs
    accreditationExperts?: boolean | ProfessionalQualificationCountOutputTypeCountAccreditationExpertsArgs
    qualificationCenterExpertises?: boolean | ProfessionalQualificationCountOutputTypeCountQualificationCenterExpertisesArgs
    applications?: boolean | ProfessionalQualificationCountOutputTypeCountApplicationsArgs
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
  export type ProfessionalQualificationCountOutputTypeCountQualificationCenterAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterAccreditationWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountAccreditationExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationExpertWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountQualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterExpertiseWhereInput
  }

  /**
   * ProfessionalQualificationCountOutputType without action
   */
  export type ProfessionalQualificationCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type QualificationCenterCountOutputType
   */

  export type QualificationCenterCountOutputType = {
    qualificationCenterAccreditations: number
    professionals: number
    qualificationCenterExpertises: number
    preferredApplications: number
    assignedApplications: number
    testSessions: number
  }

  export type QualificationCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenterAccreditations?: boolean | QualificationCenterCountOutputTypeCountQualificationCenterAccreditationsArgs
    professionals?: boolean | QualificationCenterCountOutputTypeCountProfessionalsArgs
    qualificationCenterExpertises?: boolean | QualificationCenterCountOutputTypeCountQualificationCenterExpertisesArgs
    preferredApplications?: boolean | QualificationCenterCountOutputTypeCountPreferredApplicationsArgs
    assignedApplications?: boolean | QualificationCenterCountOutputTypeCountAssignedApplicationsArgs
    testSessions?: boolean | QualificationCenterCountOutputTypeCountTestSessionsArgs
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
  export type QualificationCenterCountOutputTypeCountQualificationCenterAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterAccreditationWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountQualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterExpertiseWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountPreferredApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountAssignedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * QualificationCenterCountOutputType without action
   */
  export type QualificationCenterCountOutputTypeCountTestSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSessionWhereInput
  }


  /**
   * Count Type AccreditationExpertCountOutputType
   */

  export type AccreditationExpertCountOutputType = {
    qualificationCenterExpertises: number
  }

  export type AccreditationExpertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenterExpertises?: boolean | AccreditationExpertCountOutputTypeCountQualificationCenterExpertisesArgs
  }

  // Custom InputTypes
  /**
   * AccreditationExpertCountOutputType without action
   */
  export type AccreditationExpertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpertCountOutputType
     */
    select?: AccreditationExpertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccreditationExpertCountOutputType without action
   */
  export type AccreditationExpertCountOutputTypeCountQualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterExpertiseWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    testSessions: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testSessions?: boolean | ApplicationCountOutputTypeCountTestSessionsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountTestSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    canApplyForQualification: boolean | null
    canDevelopStandards: boolean | null
    canAccreditCenters: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    canApplyForQualification: boolean | null
    canDevelopStandards: boolean | null
    canAccreditCenters: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    canApplyForQualification: number
    canDevelopStandards: number
    canAccreditCenters: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    canApplyForQualification?: true
    canDevelopStandards?: true
    canAccreditCenters?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    canApplyForQualification?: true
    canDevelopStandards?: true
    canAccreditCenters?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    canApplyForQualification?: true
    canDevelopStandards?: true
    canAccreditCenters?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    role: $Enums.Role
    canApplyForQualification: boolean
    canDevelopStandards: boolean
    canAccreditCenters: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    passwordHash?: boolean
    role?: boolean
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    professionals?: boolean | User$professionalsArgs<ExtArgs>
    accreditationExperts?: boolean | User$accreditationExpertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "canApplyForQualification" | "canDevelopStandards" | "canAccreditCenters" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    professionals?: boolean | User$professionalsArgs<ExtArgs>
    accreditationExperts?: boolean | User$accreditationExpertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
      accreditationExperts: Prisma.$AccreditationExpertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      role: $Enums.Role
      canApplyForQualification: boolean
      canDevelopStandards: boolean
      canAccreditCenters: boolean
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
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionals<T extends User$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accreditationExperts<T extends User$accreditationExpertsArgs<ExtArgs> = {}>(args?: Subset<T, User$accreditationExpertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly canApplyForQualification: FieldRef<"User", 'Boolean'>
    readonly canDevelopStandards: FieldRef<"User", 'Boolean'>
    readonly canAccreditCenters: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.professionals
   */
  export type User$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * User.accreditationExperts
   */
  export type User$accreditationExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    where?: AccreditationExpertWhereInput
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    cursor?: AccreditationExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccreditationExpertScalarFieldEnum | AccreditationExpertScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model QualificationStandardDeveloper
   */

  export type AggregateQualificationStandardDeveloper = {
    _count: QualificationStandardDeveloperCountAggregateOutputType | null
    _avg: QualificationStandardDeveloperAvgAggregateOutputType | null
    _sum: QualificationStandardDeveloperSumAggregateOutputType | null
    _min: QualificationStandardDeveloperMinAggregateOutputType | null
    _max: QualificationStandardDeveloperMaxAggregateOutputType | null
  }

  export type QualificationStandardDeveloperAvgAggregateOutputType = {
    id: number | null
  }

  export type QualificationStandardDeveloperSumAggregateOutputType = {
    id: number | null
  }

  export type QualificationStandardDeveloperMinAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
  }

  export type QualificationStandardDeveloperMaxAggregateOutputType = {
    id: number | null
    name: string | null
    edrpou: string | null
  }

  export type QualificationStandardDeveloperCountAggregateOutputType = {
    id: number
    name: number
    edrpou: number
    _all: number
  }


  export type QualificationStandardDeveloperAvgAggregateInputType = {
    id?: true
  }

  export type QualificationStandardDeveloperSumAggregateInputType = {
    id?: true
  }

  export type QualificationStandardDeveloperMinAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
  }

  export type QualificationStandardDeveloperMaxAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
  }

  export type QualificationStandardDeveloperCountAggregateInputType = {
    id?: true
    name?: true
    edrpou?: true
    _all?: true
  }

  export type QualificationStandardDeveloperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationStandardDeveloper to aggregate.
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationStandardDevelopers to fetch.
     */
    orderBy?: QualificationStandardDeveloperOrderByWithRelationInput | QualificationStandardDeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualificationStandardDeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationStandardDevelopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationStandardDevelopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualificationStandardDevelopers
    **/
    _count?: true | QualificationStandardDeveloperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationStandardDeveloperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationStandardDeveloperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationStandardDeveloperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationStandardDeveloperMaxAggregateInputType
  }

  export type GetQualificationStandardDeveloperAggregateType<T extends QualificationStandardDeveloperAggregateArgs> = {
        [P in keyof T & keyof AggregateQualificationStandardDeveloper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualificationStandardDeveloper[P]>
      : GetScalarType<T[P], AggregateQualificationStandardDeveloper[P]>
  }




  export type QualificationStandardDeveloperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationStandardDeveloperWhereInput
    orderBy?: QualificationStandardDeveloperOrderByWithAggregationInput | QualificationStandardDeveloperOrderByWithAggregationInput[]
    by: QualificationStandardDeveloperScalarFieldEnum[] | QualificationStandardDeveloperScalarFieldEnum
    having?: QualificationStandardDeveloperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationStandardDeveloperCountAggregateInputType | true
    _avg?: QualificationStandardDeveloperAvgAggregateInputType
    _sum?: QualificationStandardDeveloperSumAggregateInputType
    _min?: QualificationStandardDeveloperMinAggregateInputType
    _max?: QualificationStandardDeveloperMaxAggregateInputType
  }

  export type QualificationStandardDeveloperGroupByOutputType = {
    id: number
    name: string
    edrpou: string
    _count: QualificationStandardDeveloperCountAggregateOutputType | null
    _avg: QualificationStandardDeveloperAvgAggregateOutputType | null
    _sum: QualificationStandardDeveloperSumAggregateOutputType | null
    _min: QualificationStandardDeveloperMinAggregateOutputType | null
    _max: QualificationStandardDeveloperMaxAggregateOutputType | null
  }

  type GetQualificationStandardDeveloperGroupByPayload<T extends QualificationStandardDeveloperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationStandardDeveloperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationStandardDeveloperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationStandardDeveloperGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationStandardDeveloperGroupByOutputType[P]>
        }
      >
    >


  export type QualificationStandardDeveloperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
    professions?: boolean | QualificationStandardDeveloper$professionsArgs<ExtArgs>
    _count?: boolean | QualificationStandardDeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationStandardDeveloper"]>

  export type QualificationStandardDeveloperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }, ExtArgs["result"]["qualificationStandardDeveloper"]>

  export type QualificationStandardDeveloperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }, ExtArgs["result"]["qualificationStandardDeveloper"]>

  export type QualificationStandardDeveloperSelectScalar = {
    id?: boolean
    name?: boolean
    edrpou?: boolean
  }

  export type QualificationStandardDeveloperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "edrpou", ExtArgs["result"]["qualificationStandardDeveloper"]>
  export type QualificationStandardDeveloperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | QualificationStandardDeveloper$professionsArgs<ExtArgs>
    _count?: boolean | QualificationStandardDeveloperCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QualificationStandardDeveloperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QualificationStandardDeveloperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QualificationStandardDeveloperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualificationStandardDeveloper"
    objects: {
      professions: Prisma.$ProfessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      edrpou: string
    }, ExtArgs["result"]["qualificationStandardDeveloper"]>
    composites: {}
  }

  type QualificationStandardDeveloperGetPayload<S extends boolean | null | undefined | QualificationStandardDeveloperDefaultArgs> = $Result.GetResult<Prisma.$QualificationStandardDeveloperPayload, S>

  type QualificationStandardDeveloperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationStandardDeveloperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationStandardDeveloperCountAggregateInputType | true
    }

  export interface QualificationStandardDeveloperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualificationStandardDeveloper'], meta: { name: 'QualificationStandardDeveloper' } }
    /**
     * Find zero or one QualificationStandardDeveloper that matches the filter.
     * @param {QualificationStandardDeveloperFindUniqueArgs} args - Arguments to find a QualificationStandardDeveloper
     * @example
     * // Get one QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationStandardDeveloperFindUniqueArgs>(args: SelectSubset<T, QualificationStandardDeveloperFindUniqueArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualificationStandardDeveloper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationStandardDeveloperFindUniqueOrThrowArgs} args - Arguments to find a QualificationStandardDeveloper
     * @example
     * // Get one QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationStandardDeveloperFindUniqueOrThrowArgs>(args: SelectSubset<T, QualificationStandardDeveloperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationStandardDeveloper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperFindFirstArgs} args - Arguments to find a QualificationStandardDeveloper
     * @example
     * // Get one QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationStandardDeveloperFindFirstArgs>(args?: SelectSubset<T, QualificationStandardDeveloperFindFirstArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationStandardDeveloper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperFindFirstOrThrowArgs} args - Arguments to find a QualificationStandardDeveloper
     * @example
     * // Get one QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationStandardDeveloperFindFirstOrThrowArgs>(args?: SelectSubset<T, QualificationStandardDeveloperFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualificationStandardDevelopers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualificationStandardDevelopers
     * const qualificationStandardDevelopers = await prisma.qualificationStandardDeveloper.findMany()
     * 
     * // Get first 10 QualificationStandardDevelopers
     * const qualificationStandardDevelopers = await prisma.qualificationStandardDeveloper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationStandardDeveloperWithIdOnly = await prisma.qualificationStandardDeveloper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualificationStandardDeveloperFindManyArgs>(args?: SelectSubset<T, QualificationStandardDeveloperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualificationStandardDeveloper.
     * @param {QualificationStandardDeveloperCreateArgs} args - Arguments to create a QualificationStandardDeveloper.
     * @example
     * // Create one QualificationStandardDeveloper
     * const QualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.create({
     *   data: {
     *     // ... data to create a QualificationStandardDeveloper
     *   }
     * })
     * 
     */
    create<T extends QualificationStandardDeveloperCreateArgs>(args: SelectSubset<T, QualificationStandardDeveloperCreateArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualificationStandardDevelopers.
     * @param {QualificationStandardDeveloperCreateManyArgs} args - Arguments to create many QualificationStandardDevelopers.
     * @example
     * // Create many QualificationStandardDevelopers
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualificationStandardDeveloperCreateManyArgs>(args?: SelectSubset<T, QualificationStandardDeveloperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualificationStandardDevelopers and returns the data saved in the database.
     * @param {QualificationStandardDeveloperCreateManyAndReturnArgs} args - Arguments to create many QualificationStandardDevelopers.
     * @example
     * // Create many QualificationStandardDevelopers
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualificationStandardDevelopers and only return the `id`
     * const qualificationStandardDeveloperWithIdOnly = await prisma.qualificationStandardDeveloper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualificationStandardDeveloperCreateManyAndReturnArgs>(args?: SelectSubset<T, QualificationStandardDeveloperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualificationStandardDeveloper.
     * @param {QualificationStandardDeveloperDeleteArgs} args - Arguments to delete one QualificationStandardDeveloper.
     * @example
     * // Delete one QualificationStandardDeveloper
     * const QualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.delete({
     *   where: {
     *     // ... filter to delete one QualificationStandardDeveloper
     *   }
     * })
     * 
     */
    delete<T extends QualificationStandardDeveloperDeleteArgs>(args: SelectSubset<T, QualificationStandardDeveloperDeleteArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualificationStandardDeveloper.
     * @param {QualificationStandardDeveloperUpdateArgs} args - Arguments to update one QualificationStandardDeveloper.
     * @example
     * // Update one QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualificationStandardDeveloperUpdateArgs>(args: SelectSubset<T, QualificationStandardDeveloperUpdateArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualificationStandardDevelopers.
     * @param {QualificationStandardDeveloperDeleteManyArgs} args - Arguments to filter QualificationStandardDevelopers to delete.
     * @example
     * // Delete a few QualificationStandardDevelopers
     * const { count } = await prisma.qualificationStandardDeveloper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualificationStandardDeveloperDeleteManyArgs>(args?: SelectSubset<T, QualificationStandardDeveloperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationStandardDevelopers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualificationStandardDevelopers
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualificationStandardDeveloperUpdateManyArgs>(args: SelectSubset<T, QualificationStandardDeveloperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationStandardDevelopers and returns the data updated in the database.
     * @param {QualificationStandardDeveloperUpdateManyAndReturnArgs} args - Arguments to update many QualificationStandardDevelopers.
     * @example
     * // Update many QualificationStandardDevelopers
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualificationStandardDevelopers and only return the `id`
     * const qualificationStandardDeveloperWithIdOnly = await prisma.qualificationStandardDeveloper.updateManyAndReturn({
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
    updateManyAndReturn<T extends QualificationStandardDeveloperUpdateManyAndReturnArgs>(args: SelectSubset<T, QualificationStandardDeveloperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualificationStandardDeveloper.
     * @param {QualificationStandardDeveloperUpsertArgs} args - Arguments to update or create a QualificationStandardDeveloper.
     * @example
     * // Update or create a QualificationStandardDeveloper
     * const qualificationStandardDeveloper = await prisma.qualificationStandardDeveloper.upsert({
     *   create: {
     *     // ... data to create a QualificationStandardDeveloper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualificationStandardDeveloper we want to update
     *   }
     * })
     */
    upsert<T extends QualificationStandardDeveloperUpsertArgs>(args: SelectSubset<T, QualificationStandardDeveloperUpsertArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualificationStandardDevelopers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperCountArgs} args - Arguments to filter QualificationStandardDevelopers to count.
     * @example
     * // Count the number of QualificationStandardDevelopers
     * const count = await prisma.qualificationStandardDeveloper.count({
     *   where: {
     *     // ... the filter for the QualificationStandardDevelopers we want to count
     *   }
     * })
    **/
    count<T extends QualificationStandardDeveloperCountArgs>(
      args?: Subset<T, QualificationStandardDeveloperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationStandardDeveloperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualificationStandardDeveloper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationStandardDeveloperAggregateArgs>(args: Subset<T, QualificationStandardDeveloperAggregateArgs>): Prisma.PrismaPromise<GetQualificationStandardDeveloperAggregateType<T>>

    /**
     * Group by QualificationStandardDeveloper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationStandardDeveloperGroupByArgs} args - Group by arguments.
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
      T extends QualificationStandardDeveloperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationStandardDeveloperGroupByArgs['orderBy'] }
        : { orderBy?: QualificationStandardDeveloperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualificationStandardDeveloperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationStandardDeveloperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualificationStandardDeveloper model
   */
  readonly fields: QualificationStandardDeveloperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualificationStandardDeveloper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationStandardDeveloperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professions<T extends QualificationStandardDeveloper$professionsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationStandardDeveloper$professionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QualificationStandardDeveloper model
   */
  interface QualificationStandardDeveloperFieldRefs {
    readonly id: FieldRef<"QualificationStandardDeveloper", 'Int'>
    readonly name: FieldRef<"QualificationStandardDeveloper", 'String'>
    readonly edrpou: FieldRef<"QualificationStandardDeveloper", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QualificationStandardDeveloper findUnique
   */
  export type QualificationStandardDeveloperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter, which QualificationStandardDeveloper to fetch.
     */
    where: QualificationStandardDeveloperWhereUniqueInput
  }

  /**
   * QualificationStandardDeveloper findUniqueOrThrow
   */
  export type QualificationStandardDeveloperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter, which QualificationStandardDeveloper to fetch.
     */
    where: QualificationStandardDeveloperWhereUniqueInput
  }

  /**
   * QualificationStandardDeveloper findFirst
   */
  export type QualificationStandardDeveloperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter, which QualificationStandardDeveloper to fetch.
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationStandardDevelopers to fetch.
     */
    orderBy?: QualificationStandardDeveloperOrderByWithRelationInput | QualificationStandardDeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationStandardDevelopers.
     */
    cursor?: QualificationStandardDeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationStandardDevelopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationStandardDevelopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationStandardDevelopers.
     */
    distinct?: QualificationStandardDeveloperScalarFieldEnum | QualificationStandardDeveloperScalarFieldEnum[]
  }

  /**
   * QualificationStandardDeveloper findFirstOrThrow
   */
  export type QualificationStandardDeveloperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter, which QualificationStandardDeveloper to fetch.
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationStandardDevelopers to fetch.
     */
    orderBy?: QualificationStandardDeveloperOrderByWithRelationInput | QualificationStandardDeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationStandardDevelopers.
     */
    cursor?: QualificationStandardDeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationStandardDevelopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationStandardDevelopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationStandardDevelopers.
     */
    distinct?: QualificationStandardDeveloperScalarFieldEnum | QualificationStandardDeveloperScalarFieldEnum[]
  }

  /**
   * QualificationStandardDeveloper findMany
   */
  export type QualificationStandardDeveloperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter, which QualificationStandardDevelopers to fetch.
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationStandardDevelopers to fetch.
     */
    orderBy?: QualificationStandardDeveloperOrderByWithRelationInput | QualificationStandardDeveloperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualificationStandardDevelopers.
     */
    cursor?: QualificationStandardDeveloperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationStandardDevelopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationStandardDevelopers.
     */
    skip?: number
    distinct?: QualificationStandardDeveloperScalarFieldEnum | QualificationStandardDeveloperScalarFieldEnum[]
  }

  /**
   * QualificationStandardDeveloper create
   */
  export type QualificationStandardDeveloperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * The data needed to create a QualificationStandardDeveloper.
     */
    data: XOR<QualificationStandardDeveloperCreateInput, QualificationStandardDeveloperUncheckedCreateInput>
  }

  /**
   * QualificationStandardDeveloper createMany
   */
  export type QualificationStandardDeveloperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualificationStandardDevelopers.
     */
    data: QualificationStandardDeveloperCreateManyInput | QualificationStandardDeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationStandardDeveloper createManyAndReturn
   */
  export type QualificationStandardDeveloperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * The data used to create many QualificationStandardDevelopers.
     */
    data: QualificationStandardDeveloperCreateManyInput | QualificationStandardDeveloperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationStandardDeveloper update
   */
  export type QualificationStandardDeveloperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * The data needed to update a QualificationStandardDeveloper.
     */
    data: XOR<QualificationStandardDeveloperUpdateInput, QualificationStandardDeveloperUncheckedUpdateInput>
    /**
     * Choose, which QualificationStandardDeveloper to update.
     */
    where: QualificationStandardDeveloperWhereUniqueInput
  }

  /**
   * QualificationStandardDeveloper updateMany
   */
  export type QualificationStandardDeveloperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualificationStandardDevelopers.
     */
    data: XOR<QualificationStandardDeveloperUpdateManyMutationInput, QualificationStandardDeveloperUncheckedUpdateManyInput>
    /**
     * Filter which QualificationStandardDevelopers to update
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * Limit how many QualificationStandardDevelopers to update.
     */
    limit?: number
  }

  /**
   * QualificationStandardDeveloper updateManyAndReturn
   */
  export type QualificationStandardDeveloperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * The data used to update QualificationStandardDevelopers.
     */
    data: XOR<QualificationStandardDeveloperUpdateManyMutationInput, QualificationStandardDeveloperUncheckedUpdateManyInput>
    /**
     * Filter which QualificationStandardDevelopers to update
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * Limit how many QualificationStandardDevelopers to update.
     */
    limit?: number
  }

  /**
   * QualificationStandardDeveloper upsert
   */
  export type QualificationStandardDeveloperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * The filter to search for the QualificationStandardDeveloper to update in case it exists.
     */
    where: QualificationStandardDeveloperWhereUniqueInput
    /**
     * In case the QualificationStandardDeveloper found by the `where` argument doesn't exist, create a new QualificationStandardDeveloper with this data.
     */
    create: XOR<QualificationStandardDeveloperCreateInput, QualificationStandardDeveloperUncheckedCreateInput>
    /**
     * In case the QualificationStandardDeveloper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationStandardDeveloperUpdateInput, QualificationStandardDeveloperUncheckedUpdateInput>
  }

  /**
   * QualificationStandardDeveloper delete
   */
  export type QualificationStandardDeveloperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
    /**
     * Filter which QualificationStandardDeveloper to delete.
     */
    where: QualificationStandardDeveloperWhereUniqueInput
  }

  /**
   * QualificationStandardDeveloper deleteMany
   */
  export type QualificationStandardDeveloperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationStandardDevelopers to delete
     */
    where?: QualificationStandardDeveloperWhereInput
    /**
     * Limit how many QualificationStandardDevelopers to delete.
     */
    limit?: number
  }

  /**
   * QualificationStandardDeveloper.professions
   */
  export type QualificationStandardDeveloper$professionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * QualificationStandardDeveloper without action
   */
  export type QualificationStandardDeveloperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationStandardDeveloper
     */
    select?: QualificationStandardDeveloperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationStandardDeveloper
     */
    omit?: QualificationStandardDeveloperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationStandardDeveloperInclude<ExtArgs> | null
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
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
    professionalQualifications?: boolean | Profession$professionalQualificationsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    developerId?: boolean
    approvalDate?: boolean
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
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
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
    professionalQualifications?: boolean | Profession$professionalQualificationsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationStandardDeveloper?: boolean | QualificationStandardDeveloperDefaultArgs<ExtArgs>
  }

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      qualificationStandardDeveloper: Prisma.$QualificationStandardDeveloperPayload<ExtArgs>
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
    qualificationStandardDeveloper<T extends QualificationStandardDeveloperDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationStandardDeveloperDefaultArgs<ExtArgs>>): Prisma__QualificationStandardDeveloperClient<$Result.GetResult<Prisma.$QualificationStandardDeveloperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    nqrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationSumAggregateOutputType = {
    id: number | null
    nqrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationMinAggregateOutputType = {
    id: number | null
    name: string | null
    nqrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nqrLevel: number | null
    professionId: number | null
  }

  export type ProfessionalQualificationCountAggregateOutputType = {
    id: number
    name: number
    nqrLevel: number
    professionId: number
    _all: number
  }


  export type ProfessionalQualificationAvgAggregateInputType = {
    id?: true
    nqrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationSumAggregateInputType = {
    id?: true
    nqrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationMinAggregateInputType = {
    id?: true
    name?: true
    nqrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationMaxAggregateInputType = {
    id?: true
    name?: true
    nqrLevel?: true
    professionId?: true
  }

  export type ProfessionalQualificationCountAggregateInputType = {
    id?: true
    name?: true
    nqrLevel?: true
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
    nqrLevel: number
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
    nqrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    qualificationCenterAccreditations?: boolean | ProfessionalQualification$qualificationCenterAccreditationsArgs<ExtArgs>
    professionals?: boolean | ProfessionalQualification$professionalsArgs<ExtArgs>
    accreditationExperts?: boolean | ProfessionalQualification$accreditationExpertsArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | ProfessionalQualification$qualificationCenterExpertisesArgs<ExtArgs>
    applications?: boolean | ProfessionalQualification$applicationsArgs<ExtArgs>
    _count?: boolean | ProfessionalQualificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nqrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nqrLevel?: boolean
    professionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalQualification"]>

  export type ProfessionalQualificationSelectScalar = {
    id?: boolean
    name?: boolean
    nqrLevel?: boolean
    professionId?: boolean
  }

  export type ProfessionalQualificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nqrLevel" | "professionId", ExtArgs["result"]["professionalQualification"]>
  export type ProfessionalQualificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    qualificationCenterAccreditations?: boolean | ProfessionalQualification$qualificationCenterAccreditationsArgs<ExtArgs>
    professionals?: boolean | ProfessionalQualification$professionalsArgs<ExtArgs>
    accreditationExperts?: boolean | ProfessionalQualification$accreditationExpertsArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | ProfessionalQualification$qualificationCenterExpertisesArgs<ExtArgs>
    applications?: boolean | ProfessionalQualification$applicationsArgs<ExtArgs>
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
      qualificationCenterAccreditations: Prisma.$QualificationCenterAccreditationPayload<ExtArgs>[]
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
      accreditationExperts: Prisma.$AccreditationExpertPayload<ExtArgs>[]
      qualificationCenterExpertises: Prisma.$QualificationCenterExpertisePayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nqrLevel: number
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
    qualificationCenterAccreditations<T extends ProfessionalQualification$qualificationCenterAccreditationsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$qualificationCenterAccreditationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionals<T extends ProfessionalQualification$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accreditationExperts<T extends ProfessionalQualification$accreditationExpertsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$accreditationExpertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qualificationCenterExpertises<T extends ProfessionalQualification$qualificationCenterExpertisesArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$qualificationCenterExpertisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends ProfessionalQualification$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualification$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly nqrLevel: FieldRef<"ProfessionalQualification", 'Int'>
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
   * ProfessionalQualification.qualificationCenterAccreditations
   */
  export type ProfessionalQualification$qualificationCenterAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    where?: QualificationCenterAccreditationWhereInput
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationCenterAccreditationScalarFieldEnum | QualificationCenterAccreditationScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.professionals
   */
  export type ProfessionalQualification$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.accreditationExperts
   */
  export type ProfessionalQualification$accreditationExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    where?: AccreditationExpertWhereInput
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    cursor?: AccreditationExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccreditationExpertScalarFieldEnum | AccreditationExpertScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.qualificationCenterExpertises
   */
  export type ProfessionalQualification$qualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    where?: QualificationCenterExpertiseWhereInput
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * ProfessionalQualification.applications
   */
  export type ProfessionalQualification$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
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
    qualificationCenterAccreditations?: boolean | QualificationCenter$qualificationCenterAccreditationsArgs<ExtArgs>
    professionals?: boolean | QualificationCenter$professionalsArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | QualificationCenter$qualificationCenterExpertisesArgs<ExtArgs>
    preferredApplications?: boolean | QualificationCenter$preferredApplicationsArgs<ExtArgs>
    assignedApplications?: boolean | QualificationCenter$assignedApplicationsArgs<ExtArgs>
    testSessions?: boolean | QualificationCenter$testSessionsArgs<ExtArgs>
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
    qualificationCenterAccreditations?: boolean | QualificationCenter$qualificationCenterAccreditationsArgs<ExtArgs>
    professionals?: boolean | QualificationCenter$professionalsArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | QualificationCenter$qualificationCenterExpertisesArgs<ExtArgs>
    preferredApplications?: boolean | QualificationCenter$preferredApplicationsArgs<ExtArgs>
    assignedApplications?: boolean | QualificationCenter$assignedApplicationsArgs<ExtArgs>
    testSessions?: boolean | QualificationCenter$testSessionsArgs<ExtArgs>
    _count?: boolean | QualificationCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QualificationCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QualificationCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QualificationCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualificationCenter"
    objects: {
      qualificationCenterAccreditations: Prisma.$QualificationCenterAccreditationPayload<ExtArgs>[]
      professionals: Prisma.$ProfessionalPayload<ExtArgs>[]
      qualificationCenterExpertises: Prisma.$QualificationCenterExpertisePayload<ExtArgs>[]
      preferredApplications: Prisma.$ApplicationPayload<ExtArgs>[]
      assignedApplications: Prisma.$ApplicationPayload<ExtArgs>[]
      testSessions: Prisma.$TestSessionPayload<ExtArgs>[]
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
    qualificationCenterAccreditations<T extends QualificationCenter$qualificationCenterAccreditationsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$qualificationCenterAccreditationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionals<T extends QualificationCenter$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qualificationCenterExpertises<T extends QualificationCenter$qualificationCenterExpertisesArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$qualificationCenterExpertisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredApplications<T extends QualificationCenter$preferredApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$preferredApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedApplications<T extends QualificationCenter$assignedApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$assignedApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testSessions<T extends QualificationCenter$testSessionsArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenter$testSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * QualificationCenter.qualificationCenterAccreditations
   */
  export type QualificationCenter$qualificationCenterAccreditationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    where?: QualificationCenterAccreditationWhereInput
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationCenterAccreditationScalarFieldEnum | QualificationCenterAccreditationScalarFieldEnum[]
  }

  /**
   * QualificationCenter.professionals
   */
  export type QualificationCenter$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * QualificationCenter.qualificationCenterExpertises
   */
  export type QualificationCenter$qualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    where?: QualificationCenterExpertiseWhereInput
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * QualificationCenter.preferredApplications
   */
  export type QualificationCenter$preferredApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * QualificationCenter.assignedApplications
   */
  export type QualificationCenter$assignedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * QualificationCenter.testSessions
   */
  export type QualificationCenter$testSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    where?: TestSessionWhereInput
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    cursor?: TestSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestSessionScalarFieldEnum | TestSessionScalarFieldEnum[]
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
   * Model QualificationCenterAccreditation
   */

  export type AggregateQualificationCenterAccreditation = {
    _count: QualificationCenterAccreditationCountAggregateOutputType | null
    _avg: QualificationCenterAccreditationAvgAggregateOutputType | null
    _sum: QualificationCenterAccreditationSumAggregateOutputType | null
    _min: QualificationCenterAccreditationMinAggregateOutputType | null
    _max: QualificationCenterAccreditationMaxAggregateOutputType | null
  }

  export type QualificationCenterAccreditationAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
  }

  export type QualificationCenterAccreditationSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
  }

  export type QualificationCenterAccreditationMinAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationDocumentId: string | null
    naqCommissionDate: Date | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.AccreditationStatus | null
  }

  export type QualificationCenterAccreditationMaxAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationDocumentId: string | null
    naqCommissionDate: Date | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.AccreditationStatus | null
  }

  export type QualificationCenterAccreditationCountAggregateOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationDocumentId: number
    naqCommissionDate: number
    startDate: number
    endDate: number
    status: number
    _all: number
  }


  export type QualificationCenterAccreditationAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
  }

  export type QualificationCenterAccreditationSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
  }

  export type QualificationCenterAccreditationMinAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationDocumentId?: true
    naqCommissionDate?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type QualificationCenterAccreditationMaxAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationDocumentId?: true
    naqCommissionDate?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type QualificationCenterAccreditationCountAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationDocumentId?: true
    naqCommissionDate?: true
    startDate?: true
    endDate?: true
    status?: true
    _all?: true
  }

  export type QualificationCenterAccreditationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenterAccreditation to aggregate.
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterAccreditations to fetch.
     */
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterAccreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterAccreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualificationCenterAccreditations
    **/
    _count?: true | QualificationCenterAccreditationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationCenterAccreditationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationCenterAccreditationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationCenterAccreditationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationCenterAccreditationMaxAggregateInputType
  }

  export type GetQualificationCenterAccreditationAggregateType<T extends QualificationCenterAccreditationAggregateArgs> = {
        [P in keyof T & keyof AggregateQualificationCenterAccreditation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualificationCenterAccreditation[P]>
      : GetScalarType<T[P], AggregateQualificationCenterAccreditation[P]>
  }




  export type QualificationCenterAccreditationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterAccreditationWhereInput
    orderBy?: QualificationCenterAccreditationOrderByWithAggregationInput | QualificationCenterAccreditationOrderByWithAggregationInput[]
    by: QualificationCenterAccreditationScalarFieldEnum[] | QualificationCenterAccreditationScalarFieldEnum
    having?: QualificationCenterAccreditationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCenterAccreditationCountAggregateInputType | true
    _avg?: QualificationCenterAccreditationAvgAggregateInputType
    _sum?: QualificationCenterAccreditationSumAggregateInputType
    _min?: QualificationCenterAccreditationMinAggregateInputType
    _max?: QualificationCenterAccreditationMaxAggregateInputType
  }

  export type QualificationCenterAccreditationGroupByOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationDocumentId: string
    naqCommissionDate: Date
    startDate: Date
    endDate: Date | null
    status: $Enums.AccreditationStatus
    _count: QualificationCenterAccreditationCountAggregateOutputType | null
    _avg: QualificationCenterAccreditationAvgAggregateOutputType | null
    _sum: QualificationCenterAccreditationSumAggregateOutputType | null
    _min: QualificationCenterAccreditationMinAggregateOutputType | null
    _max: QualificationCenterAccreditationMaxAggregateOutputType | null
  }

  type GetQualificationCenterAccreditationGroupByPayload<T extends QualificationCenterAccreditationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationCenterAccreditationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationCenterAccreditationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationCenterAccreditationGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationCenterAccreditationGroupByOutputType[P]>
        }
      >
    >


  export type QualificationCenterAccreditationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationDocumentId?: boolean
    naqCommissionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterAccreditation"]>

  export type QualificationCenterAccreditationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationDocumentId?: boolean
    naqCommissionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterAccreditation"]>

  export type QualificationCenterAccreditationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationDocumentId?: boolean
    naqCommissionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterAccreditation"]>

  export type QualificationCenterAccreditationSelectScalar = {
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationDocumentId?: boolean
    naqCommissionDate?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }

  export type QualificationCenterAccreditationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalQualificationId" | "qualificationCenterId" | "accreditationDocumentId" | "naqCommissionDate" | "startDate" | "endDate" | "status", ExtArgs["result"]["qualificationCenterAccreditation"]>
  export type QualificationCenterAccreditationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type QualificationCenterAccreditationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type QualificationCenterAccreditationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }

  export type $QualificationCenterAccreditationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualificationCenterAccreditation"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalQualificationId: number
      qualificationCenterId: number
      accreditationDocumentId: string
      naqCommissionDate: Date
      startDate: Date
      endDate: Date | null
      status: $Enums.AccreditationStatus
    }, ExtArgs["result"]["qualificationCenterAccreditation"]>
    composites: {}
  }

  type QualificationCenterAccreditationGetPayload<S extends boolean | null | undefined | QualificationCenterAccreditationDefaultArgs> = $Result.GetResult<Prisma.$QualificationCenterAccreditationPayload, S>

  type QualificationCenterAccreditationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationCenterAccreditationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationCenterAccreditationCountAggregateInputType | true
    }

  export interface QualificationCenterAccreditationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualificationCenterAccreditation'], meta: { name: 'QualificationCenterAccreditation' } }
    /**
     * Find zero or one QualificationCenterAccreditation that matches the filter.
     * @param {QualificationCenterAccreditationFindUniqueArgs} args - Arguments to find a QualificationCenterAccreditation
     * @example
     * // Get one QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationCenterAccreditationFindUniqueArgs>(args: SelectSubset<T, QualificationCenterAccreditationFindUniqueArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualificationCenterAccreditation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationCenterAccreditationFindUniqueOrThrowArgs} args - Arguments to find a QualificationCenterAccreditation
     * @example
     * // Get one QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationCenterAccreditationFindUniqueOrThrowArgs>(args: SelectSubset<T, QualificationCenterAccreditationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenterAccreditation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationFindFirstArgs} args - Arguments to find a QualificationCenterAccreditation
     * @example
     * // Get one QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationCenterAccreditationFindFirstArgs>(args?: SelectSubset<T, QualificationCenterAccreditationFindFirstArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenterAccreditation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationFindFirstOrThrowArgs} args - Arguments to find a QualificationCenterAccreditation
     * @example
     * // Get one QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationCenterAccreditationFindFirstOrThrowArgs>(args?: SelectSubset<T, QualificationCenterAccreditationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualificationCenterAccreditations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualificationCenterAccreditations
     * const qualificationCenterAccreditations = await prisma.qualificationCenterAccreditation.findMany()
     * 
     * // Get first 10 QualificationCenterAccreditations
     * const qualificationCenterAccreditations = await prisma.qualificationCenterAccreditation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationCenterAccreditationWithIdOnly = await prisma.qualificationCenterAccreditation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualificationCenterAccreditationFindManyArgs>(args?: SelectSubset<T, QualificationCenterAccreditationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualificationCenterAccreditation.
     * @param {QualificationCenterAccreditationCreateArgs} args - Arguments to create a QualificationCenterAccreditation.
     * @example
     * // Create one QualificationCenterAccreditation
     * const QualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.create({
     *   data: {
     *     // ... data to create a QualificationCenterAccreditation
     *   }
     * })
     * 
     */
    create<T extends QualificationCenterAccreditationCreateArgs>(args: SelectSubset<T, QualificationCenterAccreditationCreateArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualificationCenterAccreditations.
     * @param {QualificationCenterAccreditationCreateManyArgs} args - Arguments to create many QualificationCenterAccreditations.
     * @example
     * // Create many QualificationCenterAccreditations
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualificationCenterAccreditationCreateManyArgs>(args?: SelectSubset<T, QualificationCenterAccreditationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualificationCenterAccreditations and returns the data saved in the database.
     * @param {QualificationCenterAccreditationCreateManyAndReturnArgs} args - Arguments to create many QualificationCenterAccreditations.
     * @example
     * // Create many QualificationCenterAccreditations
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualificationCenterAccreditations and only return the `id`
     * const qualificationCenterAccreditationWithIdOnly = await prisma.qualificationCenterAccreditation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualificationCenterAccreditationCreateManyAndReturnArgs>(args?: SelectSubset<T, QualificationCenterAccreditationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualificationCenterAccreditation.
     * @param {QualificationCenterAccreditationDeleteArgs} args - Arguments to delete one QualificationCenterAccreditation.
     * @example
     * // Delete one QualificationCenterAccreditation
     * const QualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.delete({
     *   where: {
     *     // ... filter to delete one QualificationCenterAccreditation
     *   }
     * })
     * 
     */
    delete<T extends QualificationCenterAccreditationDeleteArgs>(args: SelectSubset<T, QualificationCenterAccreditationDeleteArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualificationCenterAccreditation.
     * @param {QualificationCenterAccreditationUpdateArgs} args - Arguments to update one QualificationCenterAccreditation.
     * @example
     * // Update one QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualificationCenterAccreditationUpdateArgs>(args: SelectSubset<T, QualificationCenterAccreditationUpdateArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualificationCenterAccreditations.
     * @param {QualificationCenterAccreditationDeleteManyArgs} args - Arguments to filter QualificationCenterAccreditations to delete.
     * @example
     * // Delete a few QualificationCenterAccreditations
     * const { count } = await prisma.qualificationCenterAccreditation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualificationCenterAccreditationDeleteManyArgs>(args?: SelectSubset<T, QualificationCenterAccreditationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenterAccreditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualificationCenterAccreditations
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualificationCenterAccreditationUpdateManyArgs>(args: SelectSubset<T, QualificationCenterAccreditationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenterAccreditations and returns the data updated in the database.
     * @param {QualificationCenterAccreditationUpdateManyAndReturnArgs} args - Arguments to update many QualificationCenterAccreditations.
     * @example
     * // Update many QualificationCenterAccreditations
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualificationCenterAccreditations and only return the `id`
     * const qualificationCenterAccreditationWithIdOnly = await prisma.qualificationCenterAccreditation.updateManyAndReturn({
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
    updateManyAndReturn<T extends QualificationCenterAccreditationUpdateManyAndReturnArgs>(args: SelectSubset<T, QualificationCenterAccreditationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualificationCenterAccreditation.
     * @param {QualificationCenterAccreditationUpsertArgs} args - Arguments to update or create a QualificationCenterAccreditation.
     * @example
     * // Update or create a QualificationCenterAccreditation
     * const qualificationCenterAccreditation = await prisma.qualificationCenterAccreditation.upsert({
     *   create: {
     *     // ... data to create a QualificationCenterAccreditation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualificationCenterAccreditation we want to update
     *   }
     * })
     */
    upsert<T extends QualificationCenterAccreditationUpsertArgs>(args: SelectSubset<T, QualificationCenterAccreditationUpsertArgs<ExtArgs>>): Prisma__QualificationCenterAccreditationClient<$Result.GetResult<Prisma.$QualificationCenterAccreditationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualificationCenterAccreditations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationCountArgs} args - Arguments to filter QualificationCenterAccreditations to count.
     * @example
     * // Count the number of QualificationCenterAccreditations
     * const count = await prisma.qualificationCenterAccreditation.count({
     *   where: {
     *     // ... the filter for the QualificationCenterAccreditations we want to count
     *   }
     * })
    **/
    count<T extends QualificationCenterAccreditationCountArgs>(
      args?: Subset<T, QualificationCenterAccreditationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCenterAccreditationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualificationCenterAccreditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationCenterAccreditationAggregateArgs>(args: Subset<T, QualificationCenterAccreditationAggregateArgs>): Prisma.PrismaPromise<GetQualificationCenterAccreditationAggregateType<T>>

    /**
     * Group by QualificationCenterAccreditation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterAccreditationGroupByArgs} args - Group by arguments.
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
      T extends QualificationCenterAccreditationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationCenterAccreditationGroupByArgs['orderBy'] }
        : { orderBy?: QualificationCenterAccreditationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualificationCenterAccreditationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationCenterAccreditationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualificationCenterAccreditation model
   */
  readonly fields: QualificationCenterAccreditationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualificationCenterAccreditation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationCenterAccreditationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QualificationCenterAccreditation model
   */
  interface QualificationCenterAccreditationFieldRefs {
    readonly id: FieldRef<"QualificationCenterAccreditation", 'Int'>
    readonly professionalQualificationId: FieldRef<"QualificationCenterAccreditation", 'Int'>
    readonly qualificationCenterId: FieldRef<"QualificationCenterAccreditation", 'Int'>
    readonly accreditationDocumentId: FieldRef<"QualificationCenterAccreditation", 'String'>
    readonly naqCommissionDate: FieldRef<"QualificationCenterAccreditation", 'DateTime'>
    readonly startDate: FieldRef<"QualificationCenterAccreditation", 'DateTime'>
    readonly endDate: FieldRef<"QualificationCenterAccreditation", 'DateTime'>
    readonly status: FieldRef<"QualificationCenterAccreditation", 'AccreditationStatus'>
  }
    

  // Custom InputTypes
  /**
   * QualificationCenterAccreditation findUnique
   */
  export type QualificationCenterAccreditationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterAccreditation to fetch.
     */
    where: QualificationCenterAccreditationWhereUniqueInput
  }

  /**
   * QualificationCenterAccreditation findUniqueOrThrow
   */
  export type QualificationCenterAccreditationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterAccreditation to fetch.
     */
    where: QualificationCenterAccreditationWhereUniqueInput
  }

  /**
   * QualificationCenterAccreditation findFirst
   */
  export type QualificationCenterAccreditationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterAccreditation to fetch.
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterAccreditations to fetch.
     */
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenterAccreditations.
     */
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterAccreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterAccreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenterAccreditations.
     */
    distinct?: QualificationCenterAccreditationScalarFieldEnum | QualificationCenterAccreditationScalarFieldEnum[]
  }

  /**
   * QualificationCenterAccreditation findFirstOrThrow
   */
  export type QualificationCenterAccreditationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterAccreditation to fetch.
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterAccreditations to fetch.
     */
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenterAccreditations.
     */
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterAccreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterAccreditations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenterAccreditations.
     */
    distinct?: QualificationCenterAccreditationScalarFieldEnum | QualificationCenterAccreditationScalarFieldEnum[]
  }

  /**
   * QualificationCenterAccreditation findMany
   */
  export type QualificationCenterAccreditationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterAccreditations to fetch.
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterAccreditations to fetch.
     */
    orderBy?: QualificationCenterAccreditationOrderByWithRelationInput | QualificationCenterAccreditationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualificationCenterAccreditations.
     */
    cursor?: QualificationCenterAccreditationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterAccreditations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterAccreditations.
     */
    skip?: number
    distinct?: QualificationCenterAccreditationScalarFieldEnum | QualificationCenterAccreditationScalarFieldEnum[]
  }

  /**
   * QualificationCenterAccreditation create
   */
  export type QualificationCenterAccreditationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * The data needed to create a QualificationCenterAccreditation.
     */
    data: XOR<QualificationCenterAccreditationCreateInput, QualificationCenterAccreditationUncheckedCreateInput>
  }

  /**
   * QualificationCenterAccreditation createMany
   */
  export type QualificationCenterAccreditationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualificationCenterAccreditations.
     */
    data: QualificationCenterAccreditationCreateManyInput | QualificationCenterAccreditationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationCenterAccreditation createManyAndReturn
   */
  export type QualificationCenterAccreditationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * The data used to create many QualificationCenterAccreditations.
     */
    data: QualificationCenterAccreditationCreateManyInput | QualificationCenterAccreditationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualificationCenterAccreditation update
   */
  export type QualificationCenterAccreditationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * The data needed to update a QualificationCenterAccreditation.
     */
    data: XOR<QualificationCenterAccreditationUpdateInput, QualificationCenterAccreditationUncheckedUpdateInput>
    /**
     * Choose, which QualificationCenterAccreditation to update.
     */
    where: QualificationCenterAccreditationWhereUniqueInput
  }

  /**
   * QualificationCenterAccreditation updateMany
   */
  export type QualificationCenterAccreditationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualificationCenterAccreditations.
     */
    data: XOR<QualificationCenterAccreditationUpdateManyMutationInput, QualificationCenterAccreditationUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenterAccreditations to update
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * Limit how many QualificationCenterAccreditations to update.
     */
    limit?: number
  }

  /**
   * QualificationCenterAccreditation updateManyAndReturn
   */
  export type QualificationCenterAccreditationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * The data used to update QualificationCenterAccreditations.
     */
    data: XOR<QualificationCenterAccreditationUpdateManyMutationInput, QualificationCenterAccreditationUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenterAccreditations to update
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * Limit how many QualificationCenterAccreditations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualificationCenterAccreditation upsert
   */
  export type QualificationCenterAccreditationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * The filter to search for the QualificationCenterAccreditation to update in case it exists.
     */
    where: QualificationCenterAccreditationWhereUniqueInput
    /**
     * In case the QualificationCenterAccreditation found by the `where` argument doesn't exist, create a new QualificationCenterAccreditation with this data.
     */
    create: XOR<QualificationCenterAccreditationCreateInput, QualificationCenterAccreditationUncheckedCreateInput>
    /**
     * In case the QualificationCenterAccreditation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationCenterAccreditationUpdateInput, QualificationCenterAccreditationUncheckedUpdateInput>
  }

  /**
   * QualificationCenterAccreditation delete
   */
  export type QualificationCenterAccreditationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
    /**
     * Filter which QualificationCenterAccreditation to delete.
     */
    where: QualificationCenterAccreditationWhereUniqueInput
  }

  /**
   * QualificationCenterAccreditation deleteMany
   */
  export type QualificationCenterAccreditationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenterAccreditations to delete
     */
    where?: QualificationCenterAccreditationWhereInput
    /**
     * Limit how many QualificationCenterAccreditations to delete.
     */
    limit?: number
  }

  /**
   * QualificationCenterAccreditation without action
   */
  export type QualificationCenterAccreditationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterAccreditation
     */
    select?: QualificationCenterAccreditationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterAccreditation
     */
    omit?: QualificationCenterAccreditationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterAccreditationInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    id: number | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    id: number | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    certificateNumber: string | null
    certificateReceivedAt: Date | null
    userId: number | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    qualificationCenterId: number | null
    professionalQualificationId: number | null
    certificateNumber: string | null
    certificateReceivedAt: Date | null
    userId: number | null
  }

  export type ProfessionalCountAggregateOutputType = {
    id: number
    fullName: number
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: number
    certificateReceivedAt: number
    userId: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    id?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type ProfessionalSumAggregateInputType = {
    id?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type ProfessionalMinAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    certificateNumber?: true
    certificateReceivedAt?: true
    userId?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    certificateNumber?: true
    certificateReceivedAt?: true
    userId?: true
  }

  export type ProfessionalCountAggregateInputType = {
    id?: true
    fullName?: true
    qualificationCenterId?: true
    professionalQualificationId?: true
    certificateNumber?: true
    certificateReceivedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    id: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt: Date
    userId: number | null
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    certificateNumber?: boolean
    certificateReceivedAt?: boolean
    userId?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    certificateNumber?: boolean
    certificateReceivedAt?: boolean
    userId?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    certificateNumber?: boolean
    certificateReceivedAt?: boolean
    userId?: boolean
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectScalar = {
    id?: boolean
    fullName?: boolean
    qualificationCenterId?: boolean
    professionalQualificationId?: boolean
    certificateNumber?: boolean
    certificateReceivedAt?: boolean
    userId?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "qualificationCenterId" | "professionalQualificationId" | "certificateNumber" | "certificateReceivedAt" | "userId", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }
  export type ProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }
  export type ProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | Professional$userArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      qualificationCenterId: number
      professionalQualificationId: number
      certificateNumber: string
      certificateReceivedAt: Date
      userId: number | null
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalWithIdOnly = await prisma.professional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professionals and returns the data saved in the database.
     * @param {ProfessionalCreateManyAndReturnArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals and returns the data updated in the database.
     * @param {ProfessionalUpdateManyAndReturnArgs} args - Arguments to update many Professionals.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qualificationCenter<T extends QualificationCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenterDefaultArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Professional$userArgs<ExtArgs> = {}>(args?: Subset<T, Professional$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly id: FieldRef<"Professional", 'Int'>
    readonly fullName: FieldRef<"Professional", 'String'>
    readonly qualificationCenterId: FieldRef<"Professional", 'Int'>
    readonly professionalQualificationId: FieldRef<"Professional", 'Int'>
    readonly certificateNumber: FieldRef<"Professional", 'String'>
    readonly certificateReceivedAt: FieldRef<"Professional", 'DateTime'>
    readonly userId: FieldRef<"Professional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional createManyAndReturn
   */
  export type ProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional updateManyAndReturn
   */
  export type ProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional.user
   */
  export type Professional$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
  }


  /**
   * Model AccreditationExpert
   */

  export type AggregateAccreditationExpert = {
    _count: AccreditationExpertCountAggregateOutputType | null
    _avg: AccreditationExpertAvgAggregateOutputType | null
    _sum: AccreditationExpertSumAggregateOutputType | null
    _min: AccreditationExpertMinAggregateOutputType | null
    _max: AccreditationExpertMaxAggregateOutputType | null
  }

  export type AccreditationExpertAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type AccreditationExpertSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type AccreditationExpertMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type AccreditationExpertMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    professionalQualificationId: number | null
    userId: number | null
  }

  export type AccreditationExpertCountAggregateOutputType = {
    id: number
    fullName: number
    professionalQualificationId: number
    userId: number
    _all: number
  }


  export type AccreditationExpertAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type AccreditationExpertSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type AccreditationExpertMinAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type AccreditationExpertMaxAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
    userId?: true
  }

  export type AccreditationExpertCountAggregateInputType = {
    id?: true
    fullName?: true
    professionalQualificationId?: true
    userId?: true
    _all?: true
  }

  export type AccreditationExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccreditationExpert to aggregate.
     */
    where?: AccreditationExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccreditationExperts to fetch.
     */
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccreditationExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccreditationExperts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccreditationExperts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccreditationExperts
    **/
    _count?: true | AccreditationExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccreditationExpertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccreditationExpertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccreditationExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccreditationExpertMaxAggregateInputType
  }

  export type GetAccreditationExpertAggregateType<T extends AccreditationExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateAccreditationExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccreditationExpert[P]>
      : GetScalarType<T[P], AggregateAccreditationExpert[P]>
  }




  export type AccreditationExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccreditationExpertWhereInput
    orderBy?: AccreditationExpertOrderByWithAggregationInput | AccreditationExpertOrderByWithAggregationInput[]
    by: AccreditationExpertScalarFieldEnum[] | AccreditationExpertScalarFieldEnum
    having?: AccreditationExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccreditationExpertCountAggregateInputType | true
    _avg?: AccreditationExpertAvgAggregateInputType
    _sum?: AccreditationExpertSumAggregateInputType
    _min?: AccreditationExpertMinAggregateInputType
    _max?: AccreditationExpertMaxAggregateInputType
  }

  export type AccreditationExpertGroupByOutputType = {
    id: number
    fullName: string
    professionalQualificationId: number
    userId: number | null
    _count: AccreditationExpertCountAggregateOutputType | null
    _avg: AccreditationExpertAvgAggregateOutputType | null
    _sum: AccreditationExpertSumAggregateOutputType | null
    _min: AccreditationExpertMinAggregateOutputType | null
    _max: AccreditationExpertMaxAggregateOutputType | null
  }

  type GetAccreditationExpertGroupByPayload<T extends AccreditationExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccreditationExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccreditationExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccreditationExpertGroupByOutputType[P]>
            : GetScalarType<T[P], AccreditationExpertGroupByOutputType[P]>
        }
      >
    >


  export type AccreditationExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    userId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | AccreditationExpert$qualificationCenterExpertisesArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
    _count?: boolean | AccreditationExpertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accreditationExpert"]>

  export type AccreditationExpertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    userId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
  }, ExtArgs["result"]["accreditationExpert"]>

  export type AccreditationExpertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    userId?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
  }, ExtArgs["result"]["accreditationExpert"]>

  export type AccreditationExpertSelectScalar = {
    id?: boolean
    fullName?: boolean
    professionalQualificationId?: boolean
    userId?: boolean
  }

  export type AccreditationExpertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "professionalQualificationId" | "userId", ExtArgs["result"]["accreditationExpert"]>
  export type AccreditationExpertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenterExpertises?: boolean | AccreditationExpert$qualificationCenterExpertisesArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
    _count?: boolean | AccreditationExpertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccreditationExpertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
  }
  export type AccreditationExpertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    user?: boolean | AccreditationExpert$userArgs<ExtArgs>
  }

  export type $AccreditationExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccreditationExpert"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      qualificationCenterExpertises: Prisma.$QualificationCenterExpertisePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      professionalQualificationId: number
      userId: number | null
    }, ExtArgs["result"]["accreditationExpert"]>
    composites: {}
  }

  type AccreditationExpertGetPayload<S extends boolean | null | undefined | AccreditationExpertDefaultArgs> = $Result.GetResult<Prisma.$AccreditationExpertPayload, S>

  type AccreditationExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccreditationExpertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccreditationExpertCountAggregateInputType | true
    }

  export interface AccreditationExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccreditationExpert'], meta: { name: 'AccreditationExpert' } }
    /**
     * Find zero or one AccreditationExpert that matches the filter.
     * @param {AccreditationExpertFindUniqueArgs} args - Arguments to find a AccreditationExpert
     * @example
     * // Get one AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccreditationExpertFindUniqueArgs>(args: SelectSubset<T, AccreditationExpertFindUniqueArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccreditationExpert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccreditationExpertFindUniqueOrThrowArgs} args - Arguments to find a AccreditationExpert
     * @example
     * // Get one AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccreditationExpertFindUniqueOrThrowArgs>(args: SelectSubset<T, AccreditationExpertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccreditationExpert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertFindFirstArgs} args - Arguments to find a AccreditationExpert
     * @example
     * // Get one AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccreditationExpertFindFirstArgs>(args?: SelectSubset<T, AccreditationExpertFindFirstArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccreditationExpert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertFindFirstOrThrowArgs} args - Arguments to find a AccreditationExpert
     * @example
     * // Get one AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccreditationExpertFindFirstOrThrowArgs>(args?: SelectSubset<T, AccreditationExpertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccreditationExperts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccreditationExperts
     * const accreditationExperts = await prisma.accreditationExpert.findMany()
     * 
     * // Get first 10 AccreditationExperts
     * const accreditationExperts = await prisma.accreditationExpert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accreditationExpertWithIdOnly = await prisma.accreditationExpert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccreditationExpertFindManyArgs>(args?: SelectSubset<T, AccreditationExpertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccreditationExpert.
     * @param {AccreditationExpertCreateArgs} args - Arguments to create a AccreditationExpert.
     * @example
     * // Create one AccreditationExpert
     * const AccreditationExpert = await prisma.accreditationExpert.create({
     *   data: {
     *     // ... data to create a AccreditationExpert
     *   }
     * })
     * 
     */
    create<T extends AccreditationExpertCreateArgs>(args: SelectSubset<T, AccreditationExpertCreateArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccreditationExperts.
     * @param {AccreditationExpertCreateManyArgs} args - Arguments to create many AccreditationExperts.
     * @example
     * // Create many AccreditationExperts
     * const accreditationExpert = await prisma.accreditationExpert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccreditationExpertCreateManyArgs>(args?: SelectSubset<T, AccreditationExpertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccreditationExperts and returns the data saved in the database.
     * @param {AccreditationExpertCreateManyAndReturnArgs} args - Arguments to create many AccreditationExperts.
     * @example
     * // Create many AccreditationExperts
     * const accreditationExpert = await prisma.accreditationExpert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccreditationExperts and only return the `id`
     * const accreditationExpertWithIdOnly = await prisma.accreditationExpert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccreditationExpertCreateManyAndReturnArgs>(args?: SelectSubset<T, AccreditationExpertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccreditationExpert.
     * @param {AccreditationExpertDeleteArgs} args - Arguments to delete one AccreditationExpert.
     * @example
     * // Delete one AccreditationExpert
     * const AccreditationExpert = await prisma.accreditationExpert.delete({
     *   where: {
     *     // ... filter to delete one AccreditationExpert
     *   }
     * })
     * 
     */
    delete<T extends AccreditationExpertDeleteArgs>(args: SelectSubset<T, AccreditationExpertDeleteArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccreditationExpert.
     * @param {AccreditationExpertUpdateArgs} args - Arguments to update one AccreditationExpert.
     * @example
     * // Update one AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccreditationExpertUpdateArgs>(args: SelectSubset<T, AccreditationExpertUpdateArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccreditationExperts.
     * @param {AccreditationExpertDeleteManyArgs} args - Arguments to filter AccreditationExperts to delete.
     * @example
     * // Delete a few AccreditationExperts
     * const { count } = await prisma.accreditationExpert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccreditationExpertDeleteManyArgs>(args?: SelectSubset<T, AccreditationExpertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccreditationExperts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccreditationExperts
     * const accreditationExpert = await prisma.accreditationExpert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccreditationExpertUpdateManyArgs>(args: SelectSubset<T, AccreditationExpertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccreditationExperts and returns the data updated in the database.
     * @param {AccreditationExpertUpdateManyAndReturnArgs} args - Arguments to update many AccreditationExperts.
     * @example
     * // Update many AccreditationExperts
     * const accreditationExpert = await prisma.accreditationExpert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccreditationExperts and only return the `id`
     * const accreditationExpertWithIdOnly = await prisma.accreditationExpert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccreditationExpertUpdateManyAndReturnArgs>(args: SelectSubset<T, AccreditationExpertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccreditationExpert.
     * @param {AccreditationExpertUpsertArgs} args - Arguments to update or create a AccreditationExpert.
     * @example
     * // Update or create a AccreditationExpert
     * const accreditationExpert = await prisma.accreditationExpert.upsert({
     *   create: {
     *     // ... data to create a AccreditationExpert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccreditationExpert we want to update
     *   }
     * })
     */
    upsert<T extends AccreditationExpertUpsertArgs>(args: SelectSubset<T, AccreditationExpertUpsertArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccreditationExperts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertCountArgs} args - Arguments to filter AccreditationExperts to count.
     * @example
     * // Count the number of AccreditationExperts
     * const count = await prisma.accreditationExpert.count({
     *   where: {
     *     // ... the filter for the AccreditationExperts we want to count
     *   }
     * })
    **/
    count<T extends AccreditationExpertCountArgs>(
      args?: Subset<T, AccreditationExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccreditationExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccreditationExpert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccreditationExpertAggregateArgs>(args: Subset<T, AccreditationExpertAggregateArgs>): Prisma.PrismaPromise<GetAccreditationExpertAggregateType<T>>

    /**
     * Group by AccreditationExpert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccreditationExpertGroupByArgs} args - Group by arguments.
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
      T extends AccreditationExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccreditationExpertGroupByArgs['orderBy'] }
        : { orderBy?: AccreditationExpertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccreditationExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccreditationExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccreditationExpert model
   */
  readonly fields: AccreditationExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccreditationExpert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccreditationExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qualificationCenterExpertises<T extends AccreditationExpert$qualificationCenterExpertisesArgs<ExtArgs> = {}>(args?: Subset<T, AccreditationExpert$qualificationCenterExpertisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends AccreditationExpert$userArgs<ExtArgs> = {}>(args?: Subset<T, AccreditationExpert$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccreditationExpert model
   */
  interface AccreditationExpertFieldRefs {
    readonly id: FieldRef<"AccreditationExpert", 'Int'>
    readonly fullName: FieldRef<"AccreditationExpert", 'String'>
    readonly professionalQualificationId: FieldRef<"AccreditationExpert", 'Int'>
    readonly userId: FieldRef<"AccreditationExpert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AccreditationExpert findUnique
   */
  export type AccreditationExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter, which AccreditationExpert to fetch.
     */
    where: AccreditationExpertWhereUniqueInput
  }

  /**
   * AccreditationExpert findUniqueOrThrow
   */
  export type AccreditationExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter, which AccreditationExpert to fetch.
     */
    where: AccreditationExpertWhereUniqueInput
  }

  /**
   * AccreditationExpert findFirst
   */
  export type AccreditationExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter, which AccreditationExpert to fetch.
     */
    where?: AccreditationExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccreditationExperts to fetch.
     */
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccreditationExperts.
     */
    cursor?: AccreditationExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccreditationExperts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccreditationExperts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccreditationExperts.
     */
    distinct?: AccreditationExpertScalarFieldEnum | AccreditationExpertScalarFieldEnum[]
  }

  /**
   * AccreditationExpert findFirstOrThrow
   */
  export type AccreditationExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter, which AccreditationExpert to fetch.
     */
    where?: AccreditationExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccreditationExperts to fetch.
     */
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccreditationExperts.
     */
    cursor?: AccreditationExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccreditationExperts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccreditationExperts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccreditationExperts.
     */
    distinct?: AccreditationExpertScalarFieldEnum | AccreditationExpertScalarFieldEnum[]
  }

  /**
   * AccreditationExpert findMany
   */
  export type AccreditationExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter, which AccreditationExperts to fetch.
     */
    where?: AccreditationExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccreditationExperts to fetch.
     */
    orderBy?: AccreditationExpertOrderByWithRelationInput | AccreditationExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccreditationExperts.
     */
    cursor?: AccreditationExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccreditationExperts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccreditationExperts.
     */
    skip?: number
    distinct?: AccreditationExpertScalarFieldEnum | AccreditationExpertScalarFieldEnum[]
  }

  /**
   * AccreditationExpert create
   */
  export type AccreditationExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * The data needed to create a AccreditationExpert.
     */
    data: XOR<AccreditationExpertCreateInput, AccreditationExpertUncheckedCreateInput>
  }

  /**
   * AccreditationExpert createMany
   */
  export type AccreditationExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccreditationExperts.
     */
    data: AccreditationExpertCreateManyInput | AccreditationExpertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccreditationExpert createManyAndReturn
   */
  export type AccreditationExpertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * The data used to create many AccreditationExperts.
     */
    data: AccreditationExpertCreateManyInput | AccreditationExpertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccreditationExpert update
   */
  export type AccreditationExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * The data needed to update a AccreditationExpert.
     */
    data: XOR<AccreditationExpertUpdateInput, AccreditationExpertUncheckedUpdateInput>
    /**
     * Choose, which AccreditationExpert to update.
     */
    where: AccreditationExpertWhereUniqueInput
  }

  /**
   * AccreditationExpert updateMany
   */
  export type AccreditationExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccreditationExperts.
     */
    data: XOR<AccreditationExpertUpdateManyMutationInput, AccreditationExpertUncheckedUpdateManyInput>
    /**
     * Filter which AccreditationExperts to update
     */
    where?: AccreditationExpertWhereInput
    /**
     * Limit how many AccreditationExperts to update.
     */
    limit?: number
  }

  /**
   * AccreditationExpert updateManyAndReturn
   */
  export type AccreditationExpertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * The data used to update AccreditationExperts.
     */
    data: XOR<AccreditationExpertUpdateManyMutationInput, AccreditationExpertUncheckedUpdateManyInput>
    /**
     * Filter which AccreditationExperts to update
     */
    where?: AccreditationExpertWhereInput
    /**
     * Limit how many AccreditationExperts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccreditationExpert upsert
   */
  export type AccreditationExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * The filter to search for the AccreditationExpert to update in case it exists.
     */
    where: AccreditationExpertWhereUniqueInput
    /**
     * In case the AccreditationExpert found by the `where` argument doesn't exist, create a new AccreditationExpert with this data.
     */
    create: XOR<AccreditationExpertCreateInput, AccreditationExpertUncheckedCreateInput>
    /**
     * In case the AccreditationExpert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccreditationExpertUpdateInput, AccreditationExpertUncheckedUpdateInput>
  }

  /**
   * AccreditationExpert delete
   */
  export type AccreditationExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
    /**
     * Filter which AccreditationExpert to delete.
     */
    where: AccreditationExpertWhereUniqueInput
  }

  /**
   * AccreditationExpert deleteMany
   */
  export type AccreditationExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccreditationExperts to delete
     */
    where?: AccreditationExpertWhereInput
    /**
     * Limit how many AccreditationExperts to delete.
     */
    limit?: number
  }

  /**
   * AccreditationExpert.qualificationCenterExpertises
   */
  export type AccreditationExpert$qualificationCenterExpertisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    where?: QualificationCenterExpertiseWhereInput
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * AccreditationExpert.user
   */
  export type AccreditationExpert$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AccreditationExpert without action
   */
  export type AccreditationExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccreditationExpert
     */
    select?: AccreditationExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccreditationExpert
     */
    omit?: AccreditationExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccreditationExpertInclude<ExtArgs> | null
  }


  /**
   * Model QualificationCenterExpertise
   */

  export type AggregateQualificationCenterExpertise = {
    _count: QualificationCenterExpertiseCountAggregateOutputType | null
    _avg: QualificationCenterExpertiseAvgAggregateOutputType | null
    _sum: QualificationCenterExpertiseSumAggregateOutputType | null
    _min: QualificationCenterExpertiseMinAggregateOutputType | null
    _max: QualificationCenterExpertiseMaxAggregateOutputType | null
  }

  export type QualificationCenterExpertiseAvgAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationExpertId: number | null
  }

  export type QualificationCenterExpertiseSumAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationExpertId: number | null
  }

  export type QualificationCenterExpertiseMinAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationExpertId: number | null
    expertiseDate: Date | null
    result: string | null
    notes: string | null
  }

  export type QualificationCenterExpertiseMaxAggregateOutputType = {
    id: number | null
    professionalQualificationId: number | null
    qualificationCenterId: number | null
    accreditationExpertId: number | null
    expertiseDate: Date | null
    result: string | null
    notes: string | null
  }

  export type QualificationCenterExpertiseCountAggregateOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate: number
    result: number
    notes: number
    _all: number
  }


  export type QualificationCenterExpertiseAvgAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationExpertId?: true
  }

  export type QualificationCenterExpertiseSumAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationExpertId?: true
  }

  export type QualificationCenterExpertiseMinAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationExpertId?: true
    expertiseDate?: true
    result?: true
    notes?: true
  }

  export type QualificationCenterExpertiseMaxAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationExpertId?: true
    expertiseDate?: true
    result?: true
    notes?: true
  }

  export type QualificationCenterExpertiseCountAggregateInputType = {
    id?: true
    professionalQualificationId?: true
    qualificationCenterId?: true
    accreditationExpertId?: true
    expertiseDate?: true
    result?: true
    notes?: true
    _all?: true
  }

  export type QualificationCenterExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenterExpertise to aggregate.
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterExpertises to fetch.
     */
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualificationCenterExpertises
    **/
    _count?: true | QualificationCenterExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualificationCenterExpertiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualificationCenterExpertiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualificationCenterExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualificationCenterExpertiseMaxAggregateInputType
  }

  export type GetQualificationCenterExpertiseAggregateType<T extends QualificationCenterExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateQualificationCenterExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualificationCenterExpertise[P]>
      : GetScalarType<T[P], AggregateQualificationCenterExpertise[P]>
  }




  export type QualificationCenterExpertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualificationCenterExpertiseWhereInput
    orderBy?: QualificationCenterExpertiseOrderByWithAggregationInput | QualificationCenterExpertiseOrderByWithAggregationInput[]
    by: QualificationCenterExpertiseScalarFieldEnum[] | QualificationCenterExpertiseScalarFieldEnum
    having?: QualificationCenterExpertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCenterExpertiseCountAggregateInputType | true
    _avg?: QualificationCenterExpertiseAvgAggregateInputType
    _sum?: QualificationCenterExpertiseSumAggregateInputType
    _min?: QualificationCenterExpertiseMinAggregateInputType
    _max?: QualificationCenterExpertiseMaxAggregateInputType
  }

  export type QualificationCenterExpertiseGroupByOutputType = {
    id: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate: Date
    result: string | null
    notes: string | null
    _count: QualificationCenterExpertiseCountAggregateOutputType | null
    _avg: QualificationCenterExpertiseAvgAggregateOutputType | null
    _sum: QualificationCenterExpertiseSumAggregateOutputType | null
    _min: QualificationCenterExpertiseMinAggregateOutputType | null
    _max: QualificationCenterExpertiseMaxAggregateOutputType | null
  }

  type GetQualificationCenterExpertiseGroupByPayload<T extends QualificationCenterExpertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationCenterExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualificationCenterExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualificationCenterExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], QualificationCenterExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type QualificationCenterExpertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationExpertId?: boolean
    expertiseDate?: boolean
    result?: boolean
    notes?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterExpertise"]>

  export type QualificationCenterExpertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationExpertId?: boolean
    expertiseDate?: boolean
    result?: boolean
    notes?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterExpertise"]>

  export type QualificationCenterExpertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationExpertId?: boolean
    expertiseDate?: boolean
    result?: boolean
    notes?: boolean
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qualificationCenterExpertise"]>

  export type QualificationCenterExpertiseSelectScalar = {
    id?: boolean
    professionalQualificationId?: boolean
    qualificationCenterId?: boolean
    accreditationExpertId?: boolean
    expertiseDate?: boolean
    result?: boolean
    notes?: boolean
  }

  export type QualificationCenterExpertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalQualificationId" | "qualificationCenterId" | "accreditationExpertId" | "expertiseDate" | "result" | "notes", ExtArgs["result"]["qualificationCenterExpertise"]>
  export type QualificationCenterExpertiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }
  export type QualificationCenterExpertiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }
  export type QualificationCenterExpertiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
    accreditationExpert?: boolean | AccreditationExpertDefaultArgs<ExtArgs>
  }

  export type $QualificationCenterExpertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualificationCenterExpertise"
    objects: {
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
      accreditationExpert: Prisma.$AccreditationExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalQualificationId: number
      qualificationCenterId: number
      accreditationExpertId: number
      expertiseDate: Date
      result: string | null
      notes: string | null
    }, ExtArgs["result"]["qualificationCenterExpertise"]>
    composites: {}
  }

  type QualificationCenterExpertiseGetPayload<S extends boolean | null | undefined | QualificationCenterExpertiseDefaultArgs> = $Result.GetResult<Prisma.$QualificationCenterExpertisePayload, S>

  type QualificationCenterExpertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationCenterExpertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationCenterExpertiseCountAggregateInputType | true
    }

  export interface QualificationCenterExpertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualificationCenterExpertise'], meta: { name: 'QualificationCenterExpertise' } }
    /**
     * Find zero or one QualificationCenterExpertise that matches the filter.
     * @param {QualificationCenterExpertiseFindUniqueArgs} args - Arguments to find a QualificationCenterExpertise
     * @example
     * // Get one QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationCenterExpertiseFindUniqueArgs>(args: SelectSubset<T, QualificationCenterExpertiseFindUniqueArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualificationCenterExpertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationCenterExpertiseFindUniqueOrThrowArgs} args - Arguments to find a QualificationCenterExpertise
     * @example
     * // Get one QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationCenterExpertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, QualificationCenterExpertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenterExpertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseFindFirstArgs} args - Arguments to find a QualificationCenterExpertise
     * @example
     * // Get one QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationCenterExpertiseFindFirstArgs>(args?: SelectSubset<T, QualificationCenterExpertiseFindFirstArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualificationCenterExpertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseFindFirstOrThrowArgs} args - Arguments to find a QualificationCenterExpertise
     * @example
     * // Get one QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationCenterExpertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, QualificationCenterExpertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualificationCenterExpertises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualificationCenterExpertises
     * const qualificationCenterExpertises = await prisma.qualificationCenterExpertise.findMany()
     * 
     * // Get first 10 QualificationCenterExpertises
     * const qualificationCenterExpertises = await prisma.qualificationCenterExpertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualificationCenterExpertiseWithIdOnly = await prisma.qualificationCenterExpertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualificationCenterExpertiseFindManyArgs>(args?: SelectSubset<T, QualificationCenterExpertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualificationCenterExpertise.
     * @param {QualificationCenterExpertiseCreateArgs} args - Arguments to create a QualificationCenterExpertise.
     * @example
     * // Create one QualificationCenterExpertise
     * const QualificationCenterExpertise = await prisma.qualificationCenterExpertise.create({
     *   data: {
     *     // ... data to create a QualificationCenterExpertise
     *   }
     * })
     * 
     */
    create<T extends QualificationCenterExpertiseCreateArgs>(args: SelectSubset<T, QualificationCenterExpertiseCreateArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualificationCenterExpertises.
     * @param {QualificationCenterExpertiseCreateManyArgs} args - Arguments to create many QualificationCenterExpertises.
     * @example
     * // Create many QualificationCenterExpertises
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualificationCenterExpertiseCreateManyArgs>(args?: SelectSubset<T, QualificationCenterExpertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualificationCenterExpertises and returns the data saved in the database.
     * @param {QualificationCenterExpertiseCreateManyAndReturnArgs} args - Arguments to create many QualificationCenterExpertises.
     * @example
     * // Create many QualificationCenterExpertises
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualificationCenterExpertises and only return the `id`
     * const qualificationCenterExpertiseWithIdOnly = await prisma.qualificationCenterExpertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualificationCenterExpertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, QualificationCenterExpertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualificationCenterExpertise.
     * @param {QualificationCenterExpertiseDeleteArgs} args - Arguments to delete one QualificationCenterExpertise.
     * @example
     * // Delete one QualificationCenterExpertise
     * const QualificationCenterExpertise = await prisma.qualificationCenterExpertise.delete({
     *   where: {
     *     // ... filter to delete one QualificationCenterExpertise
     *   }
     * })
     * 
     */
    delete<T extends QualificationCenterExpertiseDeleteArgs>(args: SelectSubset<T, QualificationCenterExpertiseDeleteArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualificationCenterExpertise.
     * @param {QualificationCenterExpertiseUpdateArgs} args - Arguments to update one QualificationCenterExpertise.
     * @example
     * // Update one QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualificationCenterExpertiseUpdateArgs>(args: SelectSubset<T, QualificationCenterExpertiseUpdateArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualificationCenterExpertises.
     * @param {QualificationCenterExpertiseDeleteManyArgs} args - Arguments to filter QualificationCenterExpertises to delete.
     * @example
     * // Delete a few QualificationCenterExpertises
     * const { count } = await prisma.qualificationCenterExpertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualificationCenterExpertiseDeleteManyArgs>(args?: SelectSubset<T, QualificationCenterExpertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenterExpertises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualificationCenterExpertises
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualificationCenterExpertiseUpdateManyArgs>(args: SelectSubset<T, QualificationCenterExpertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualificationCenterExpertises and returns the data updated in the database.
     * @param {QualificationCenterExpertiseUpdateManyAndReturnArgs} args - Arguments to update many QualificationCenterExpertises.
     * @example
     * // Update many QualificationCenterExpertises
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualificationCenterExpertises and only return the `id`
     * const qualificationCenterExpertiseWithIdOnly = await prisma.qualificationCenterExpertise.updateManyAndReturn({
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
    updateManyAndReturn<T extends QualificationCenterExpertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, QualificationCenterExpertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualificationCenterExpertise.
     * @param {QualificationCenterExpertiseUpsertArgs} args - Arguments to update or create a QualificationCenterExpertise.
     * @example
     * // Update or create a QualificationCenterExpertise
     * const qualificationCenterExpertise = await prisma.qualificationCenterExpertise.upsert({
     *   create: {
     *     // ... data to create a QualificationCenterExpertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualificationCenterExpertise we want to update
     *   }
     * })
     */
    upsert<T extends QualificationCenterExpertiseUpsertArgs>(args: SelectSubset<T, QualificationCenterExpertiseUpsertArgs<ExtArgs>>): Prisma__QualificationCenterExpertiseClient<$Result.GetResult<Prisma.$QualificationCenterExpertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualificationCenterExpertises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseCountArgs} args - Arguments to filter QualificationCenterExpertises to count.
     * @example
     * // Count the number of QualificationCenterExpertises
     * const count = await prisma.qualificationCenterExpertise.count({
     *   where: {
     *     // ... the filter for the QualificationCenterExpertises we want to count
     *   }
     * })
    **/
    count<T extends QualificationCenterExpertiseCountArgs>(
      args?: Subset<T, QualificationCenterExpertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCenterExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualificationCenterExpertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationCenterExpertiseAggregateArgs>(args: Subset<T, QualificationCenterExpertiseAggregateArgs>): Prisma.PrismaPromise<GetQualificationCenterExpertiseAggregateType<T>>

    /**
     * Group by QualificationCenterExpertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCenterExpertiseGroupByArgs} args - Group by arguments.
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
      T extends QualificationCenterExpertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationCenterExpertiseGroupByArgs['orderBy'] }
        : { orderBy?: QualificationCenterExpertiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualificationCenterExpertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualificationCenterExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualificationCenterExpertise model
   */
  readonly fields: QualificationCenterExpertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualificationCenterExpertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationCenterExpertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    qualificationCenter<T extends QualificationCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QualificationCenterDefaultArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accreditationExpert<T extends AccreditationExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccreditationExpertDefaultArgs<ExtArgs>>): Prisma__AccreditationExpertClient<$Result.GetResult<Prisma.$AccreditationExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QualificationCenterExpertise model
   */
  interface QualificationCenterExpertiseFieldRefs {
    readonly id: FieldRef<"QualificationCenterExpertise", 'Int'>
    readonly professionalQualificationId: FieldRef<"QualificationCenterExpertise", 'Int'>
    readonly qualificationCenterId: FieldRef<"QualificationCenterExpertise", 'Int'>
    readonly accreditationExpertId: FieldRef<"QualificationCenterExpertise", 'Int'>
    readonly expertiseDate: FieldRef<"QualificationCenterExpertise", 'DateTime'>
    readonly result: FieldRef<"QualificationCenterExpertise", 'String'>
    readonly notes: FieldRef<"QualificationCenterExpertise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QualificationCenterExpertise findUnique
   */
  export type QualificationCenterExpertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterExpertise to fetch.
     */
    where: QualificationCenterExpertiseWhereUniqueInput
  }

  /**
   * QualificationCenterExpertise findUniqueOrThrow
   */
  export type QualificationCenterExpertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterExpertise to fetch.
     */
    where: QualificationCenterExpertiseWhereUniqueInput
  }

  /**
   * QualificationCenterExpertise findFirst
   */
  export type QualificationCenterExpertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterExpertise to fetch.
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterExpertises to fetch.
     */
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenterExpertises.
     */
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenterExpertises.
     */
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * QualificationCenterExpertise findFirstOrThrow
   */
  export type QualificationCenterExpertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterExpertise to fetch.
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterExpertises to fetch.
     */
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualificationCenterExpertises.
     */
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualificationCenterExpertises.
     */
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * QualificationCenterExpertise findMany
   */
  export type QualificationCenterExpertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which QualificationCenterExpertises to fetch.
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualificationCenterExpertises to fetch.
     */
    orderBy?: QualificationCenterExpertiseOrderByWithRelationInput | QualificationCenterExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualificationCenterExpertises.
     */
    cursor?: QualificationCenterExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualificationCenterExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualificationCenterExpertises.
     */
    skip?: number
    distinct?: QualificationCenterExpertiseScalarFieldEnum | QualificationCenterExpertiseScalarFieldEnum[]
  }

  /**
   * QualificationCenterExpertise create
   */
  export type QualificationCenterExpertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to create a QualificationCenterExpertise.
     */
    data: XOR<QualificationCenterExpertiseCreateInput, QualificationCenterExpertiseUncheckedCreateInput>
  }

  /**
   * QualificationCenterExpertise createMany
   */
  export type QualificationCenterExpertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualificationCenterExpertises.
     */
    data: QualificationCenterExpertiseCreateManyInput | QualificationCenterExpertiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualificationCenterExpertise createManyAndReturn
   */
  export type QualificationCenterExpertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * The data used to create many QualificationCenterExpertises.
     */
    data: QualificationCenterExpertiseCreateManyInput | QualificationCenterExpertiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualificationCenterExpertise update
   */
  export type QualificationCenterExpertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to update a QualificationCenterExpertise.
     */
    data: XOR<QualificationCenterExpertiseUpdateInput, QualificationCenterExpertiseUncheckedUpdateInput>
    /**
     * Choose, which QualificationCenterExpertise to update.
     */
    where: QualificationCenterExpertiseWhereUniqueInput
  }

  /**
   * QualificationCenterExpertise updateMany
   */
  export type QualificationCenterExpertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualificationCenterExpertises.
     */
    data: XOR<QualificationCenterExpertiseUpdateManyMutationInput, QualificationCenterExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenterExpertises to update
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * Limit how many QualificationCenterExpertises to update.
     */
    limit?: number
  }

  /**
   * QualificationCenterExpertise updateManyAndReturn
   */
  export type QualificationCenterExpertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * The data used to update QualificationCenterExpertises.
     */
    data: XOR<QualificationCenterExpertiseUpdateManyMutationInput, QualificationCenterExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which QualificationCenterExpertises to update
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * Limit how many QualificationCenterExpertises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualificationCenterExpertise upsert
   */
  export type QualificationCenterExpertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * The filter to search for the QualificationCenterExpertise to update in case it exists.
     */
    where: QualificationCenterExpertiseWhereUniqueInput
    /**
     * In case the QualificationCenterExpertise found by the `where` argument doesn't exist, create a new QualificationCenterExpertise with this data.
     */
    create: XOR<QualificationCenterExpertiseCreateInput, QualificationCenterExpertiseUncheckedCreateInput>
    /**
     * In case the QualificationCenterExpertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationCenterExpertiseUpdateInput, QualificationCenterExpertiseUncheckedUpdateInput>
  }

  /**
   * QualificationCenterExpertise delete
   */
  export type QualificationCenterExpertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
    /**
     * Filter which QualificationCenterExpertise to delete.
     */
    where: QualificationCenterExpertiseWhereUniqueInput
  }

  /**
   * QualificationCenterExpertise deleteMany
   */
  export type QualificationCenterExpertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualificationCenterExpertises to delete
     */
    where?: QualificationCenterExpertiseWhereInput
    /**
     * Limit how many QualificationCenterExpertises to delete.
     */
    limit?: number
  }

  /**
   * QualificationCenterExpertise without action
   */
  export type QualificationCenterExpertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualificationCenterExpertise
     */
    select?: QualificationCenterExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualificationCenterExpertise
     */
    omit?: QualificationCenterExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationCenterExpertiseInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
    professionalQualificationId: number | null
    preferredQualificationCenterId: number | null
    qualificationCenterId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
    professionalQualificationId: number | null
    preferredQualificationCenterId: number | null
    qualificationCenterId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    applicantId: number | null
    professionalQualificationId: number | null
    preferredQualificationCenterId: number | null
    qualificationCenterId: number | null
    status: $Enums.ApplicationStatus | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    applicantId: number | null
    professionalQualificationId: number | null
    preferredQualificationCenterId: number | null
    qualificationCenterId: number | null
    status: $Enums.ApplicationStatus | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId: number
    qualificationCenterId: number
    status: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    applicantId?: true
    professionalQualificationId?: true
    preferredQualificationCenterId?: true
    qualificationCenterId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    applicantId?: true
    professionalQualificationId?: true
    preferredQualificationCenterId?: true
    qualificationCenterId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    applicantId?: true
    professionalQualificationId?: true
    preferredQualificationCenterId?: true
    qualificationCenterId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicantId?: true
    professionalQualificationId?: true
    preferredQualificationCenterId?: true
    qualificationCenterId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicantId?: true
    professionalQualificationId?: true
    preferredQualificationCenterId?: true
    qualificationCenterId?: true
    status?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId: number | null
    qualificationCenterId: number | null
    status: $Enums.ApplicationStatus
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    professionalQualificationId?: boolean
    preferredQualificationCenterId?: boolean
    qualificationCenterId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
    testSessions?: boolean | Application$testSessionsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    professionalQualificationId?: boolean
    preferredQualificationCenterId?: boolean
    qualificationCenterId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    professionalQualificationId?: boolean
    preferredQualificationCenterId?: boolean
    qualificationCenterId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicantId?: boolean
    professionalQualificationId?: boolean
    preferredQualificationCenterId?: boolean
    qualificationCenterId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "professionalQualificationId" | "preferredQualificationCenterId" | "qualificationCenterId" | "status" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
    testSessions?: boolean | Application$testSessionsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>
    professionalQualification?: boolean | ProfessionalQualificationDefaultArgs<ExtArgs>
    preferredQualificationCenter?: boolean | Application$preferredQualificationCenterArgs<ExtArgs>
    assignedQualificationCenter?: boolean | Application$assignedQualificationCenterArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      applicant: Prisma.$UserPayload<ExtArgs>
      professionalQualification: Prisma.$ProfessionalQualificationPayload<ExtArgs>
      preferredQualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs> | null
      assignedQualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs> | null
      testSessions: Prisma.$TestSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicantId: number
      professionalQualificationId: number
      preferredQualificationCenterId: number | null
      qualificationCenterId: number | null
      status: $Enums.ApplicationStatus
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professionalQualification<T extends ProfessionalQualificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalQualificationDefaultArgs<ExtArgs>>): Prisma__ProfessionalQualificationClient<$Result.GetResult<Prisma.$ProfessionalQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preferredQualificationCenter<T extends Application$preferredQualificationCenterArgs<ExtArgs> = {}>(args?: Subset<T, Application$preferredQualificationCenterArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedQualificationCenter<T extends Application$assignedQualificationCenterArgs<ExtArgs> = {}>(args?: Subset<T, Application$assignedQualificationCenterArgs<ExtArgs>>): Prisma__QualificationCenterClient<$Result.GetResult<Prisma.$QualificationCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testSessions<T extends Application$testSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Application$testSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly applicantId: FieldRef<"Application", 'Int'>
    readonly professionalQualificationId: FieldRef<"Application", 'Int'>
    readonly preferredQualificationCenterId: FieldRef<"Application", 'Int'>
    readonly qualificationCenterId: FieldRef<"Application", 'Int'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly comment: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.preferredQualificationCenter
   */
  export type Application$preferredQualificationCenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: QualificationCenterWhereInput
  }

  /**
   * Application.assignedQualificationCenter
   */
  export type Application$assignedQualificationCenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: QualificationCenterWhereInput
  }

  /**
   * Application.testSessions
   */
  export type Application$testSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    where?: TestSessionWhereInput
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    cursor?: TestSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestSessionScalarFieldEnum | TestSessionScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model TestSession
   */

  export type AggregateTestSession = {
    _count: TestSessionCountAggregateOutputType | null
    _avg: TestSessionAvgAggregateOutputType | null
    _sum: TestSessionSumAggregateOutputType | null
    _min: TestSessionMinAggregateOutputType | null
    _max: TestSessionMaxAggregateOutputType | null
  }

  export type TestSessionAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    qualificationCenterId: number | null
  }

  export type TestSessionSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    qualificationCenterId: number | null
  }

  export type TestSessionMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    qualificationCenterId: number | null
    scheduledAt: Date | null
    result: $Enums.TestResult | null
    notes: string | null
  }

  export type TestSessionMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    qualificationCenterId: number | null
    scheduledAt: Date | null
    result: $Enums.TestResult | null
    notes: string | null
  }

  export type TestSessionCountAggregateOutputType = {
    id: number
    applicationId: number
    qualificationCenterId: number
    scheduledAt: number
    result: number
    notes: number
    _all: number
  }


  export type TestSessionAvgAggregateInputType = {
    id?: true
    applicationId?: true
    qualificationCenterId?: true
  }

  export type TestSessionSumAggregateInputType = {
    id?: true
    applicationId?: true
    qualificationCenterId?: true
  }

  export type TestSessionMinAggregateInputType = {
    id?: true
    applicationId?: true
    qualificationCenterId?: true
    scheduledAt?: true
    result?: true
    notes?: true
  }

  export type TestSessionMaxAggregateInputType = {
    id?: true
    applicationId?: true
    qualificationCenterId?: true
    scheduledAt?: true
    result?: true
    notes?: true
  }

  export type TestSessionCountAggregateInputType = {
    id?: true
    applicationId?: true
    qualificationCenterId?: true
    scheduledAt?: true
    result?: true
    notes?: true
    _all?: true
  }

  export type TestSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestSession to aggregate.
     */
    where?: TestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSessions to fetch.
     */
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestSessions
    **/
    _count?: true | TestSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestSessionMaxAggregateInputType
  }

  export type GetTestSessionAggregateType<T extends TestSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestSession[P]>
      : GetScalarType<T[P], AggregateTestSession[P]>
  }




  export type TestSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSessionWhereInput
    orderBy?: TestSessionOrderByWithAggregationInput | TestSessionOrderByWithAggregationInput[]
    by: TestSessionScalarFieldEnum[] | TestSessionScalarFieldEnum
    having?: TestSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestSessionCountAggregateInputType | true
    _avg?: TestSessionAvgAggregateInputType
    _sum?: TestSessionSumAggregateInputType
    _min?: TestSessionMinAggregateInputType
    _max?: TestSessionMaxAggregateInputType
  }

  export type TestSessionGroupByOutputType = {
    id: number
    applicationId: number
    qualificationCenterId: number
    scheduledAt: Date
    result: $Enums.TestResult
    notes: string | null
    _count: TestSessionCountAggregateOutputType | null
    _avg: TestSessionAvgAggregateOutputType | null
    _sum: TestSessionSumAggregateOutputType | null
    _min: TestSessionMinAggregateOutputType | null
    _max: TestSessionMaxAggregateOutputType | null
  }

  type GetTestSessionGroupByPayload<T extends TestSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TestSessionGroupByOutputType[P]>
        }
      >
    >


  export type TestSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    qualificationCenterId?: boolean
    scheduledAt?: boolean
    result?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSession"]>

  export type TestSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    qualificationCenterId?: boolean
    scheduledAt?: boolean
    result?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSession"]>

  export type TestSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    qualificationCenterId?: boolean
    scheduledAt?: boolean
    result?: boolean
    notes?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSession"]>

  export type TestSessionSelectScalar = {
    id?: boolean
    applicationId?: boolean
    qualificationCenterId?: boolean
    scheduledAt?: boolean
    result?: boolean
    notes?: boolean
  }

  export type TestSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "qualificationCenterId" | "scheduledAt" | "result" | "notes", ExtArgs["result"]["testSession"]>
  export type TestSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type TestSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }
  export type TestSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    qualificationCenter?: boolean | QualificationCenterDefaultArgs<ExtArgs>
  }

  export type $TestSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestSession"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      qualificationCenter: Prisma.$QualificationCenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      qualificationCenterId: number
      scheduledAt: Date
      result: $Enums.TestResult
      notes: string | null
    }, ExtArgs["result"]["testSession"]>
    composites: {}
  }

  type TestSessionGetPayload<S extends boolean | null | undefined | TestSessionDefaultArgs> = $Result.GetResult<Prisma.$TestSessionPayload, S>

  type TestSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestSessionCountAggregateInputType | true
    }

  export interface TestSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestSession'], meta: { name: 'TestSession' } }
    /**
     * Find zero or one TestSession that matches the filter.
     * @param {TestSessionFindUniqueArgs} args - Arguments to find a TestSession
     * @example
     * // Get one TestSession
     * const testSession = await prisma.testSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestSessionFindUniqueArgs>(args: SelectSubset<T, TestSessionFindUniqueArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestSessionFindUniqueOrThrowArgs} args - Arguments to find a TestSession
     * @example
     * // Get one TestSession
     * const testSession = await prisma.testSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TestSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionFindFirstArgs} args - Arguments to find a TestSession
     * @example
     * // Get one TestSession
     * const testSession = await prisma.testSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestSessionFindFirstArgs>(args?: SelectSubset<T, TestSessionFindFirstArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionFindFirstOrThrowArgs} args - Arguments to find a TestSession
     * @example
     * // Get one TestSession
     * const testSession = await prisma.testSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TestSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestSessions
     * const testSessions = await prisma.testSession.findMany()
     * 
     * // Get first 10 TestSessions
     * const testSessions = await prisma.testSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testSessionWithIdOnly = await prisma.testSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestSessionFindManyArgs>(args?: SelectSubset<T, TestSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestSession.
     * @param {TestSessionCreateArgs} args - Arguments to create a TestSession.
     * @example
     * // Create one TestSession
     * const TestSession = await prisma.testSession.create({
     *   data: {
     *     // ... data to create a TestSession
     *   }
     * })
     * 
     */
    create<T extends TestSessionCreateArgs>(args: SelectSubset<T, TestSessionCreateArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestSessions.
     * @param {TestSessionCreateManyArgs} args - Arguments to create many TestSessions.
     * @example
     * // Create many TestSessions
     * const testSession = await prisma.testSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestSessionCreateManyArgs>(args?: SelectSubset<T, TestSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestSessions and returns the data saved in the database.
     * @param {TestSessionCreateManyAndReturnArgs} args - Arguments to create many TestSessions.
     * @example
     * // Create many TestSessions
     * const testSession = await prisma.testSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestSessions and only return the `id`
     * const testSessionWithIdOnly = await prisma.testSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TestSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestSession.
     * @param {TestSessionDeleteArgs} args - Arguments to delete one TestSession.
     * @example
     * // Delete one TestSession
     * const TestSession = await prisma.testSession.delete({
     *   where: {
     *     // ... filter to delete one TestSession
     *   }
     * })
     * 
     */
    delete<T extends TestSessionDeleteArgs>(args: SelectSubset<T, TestSessionDeleteArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestSession.
     * @param {TestSessionUpdateArgs} args - Arguments to update one TestSession.
     * @example
     * // Update one TestSession
     * const testSession = await prisma.testSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestSessionUpdateArgs>(args: SelectSubset<T, TestSessionUpdateArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestSessions.
     * @param {TestSessionDeleteManyArgs} args - Arguments to filter TestSessions to delete.
     * @example
     * // Delete a few TestSessions
     * const { count } = await prisma.testSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestSessionDeleteManyArgs>(args?: SelectSubset<T, TestSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestSessions
     * const testSession = await prisma.testSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestSessionUpdateManyArgs>(args: SelectSubset<T, TestSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestSessions and returns the data updated in the database.
     * @param {TestSessionUpdateManyAndReturnArgs} args - Arguments to update many TestSessions.
     * @example
     * // Update many TestSessions
     * const testSession = await prisma.testSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestSessions and only return the `id`
     * const testSessionWithIdOnly = await prisma.testSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TestSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestSession.
     * @param {TestSessionUpsertArgs} args - Arguments to update or create a TestSession.
     * @example
     * // Update or create a TestSession
     * const testSession = await prisma.testSession.upsert({
     *   create: {
     *     // ... data to create a TestSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestSession we want to update
     *   }
     * })
     */
    upsert<T extends TestSessionUpsertArgs>(args: SelectSubset<T, TestSessionUpsertArgs<ExtArgs>>): Prisma__TestSessionClient<$Result.GetResult<Prisma.$TestSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionCountArgs} args - Arguments to filter TestSessions to count.
     * @example
     * // Count the number of TestSessions
     * const count = await prisma.testSession.count({
     *   where: {
     *     // ... the filter for the TestSessions we want to count
     *   }
     * })
    **/
    count<T extends TestSessionCountArgs>(
      args?: Subset<T, TestSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestSessionAggregateArgs>(args: Subset<T, TestSessionAggregateArgs>): Prisma.PrismaPromise<GetTestSessionAggregateType<T>>

    /**
     * Group by TestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSessionGroupByArgs} args - Group by arguments.
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
      T extends TestSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestSessionGroupByArgs['orderBy'] }
        : { orderBy?: TestSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestSession model
   */
  readonly fields: TestSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestSession model
   */
  interface TestSessionFieldRefs {
    readonly id: FieldRef<"TestSession", 'Int'>
    readonly applicationId: FieldRef<"TestSession", 'Int'>
    readonly qualificationCenterId: FieldRef<"TestSession", 'Int'>
    readonly scheduledAt: FieldRef<"TestSession", 'DateTime'>
    readonly result: FieldRef<"TestSession", 'TestResult'>
    readonly notes: FieldRef<"TestSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestSession findUnique
   */
  export type TestSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter, which TestSession to fetch.
     */
    where: TestSessionWhereUniqueInput
  }

  /**
   * TestSession findUniqueOrThrow
   */
  export type TestSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter, which TestSession to fetch.
     */
    where: TestSessionWhereUniqueInput
  }

  /**
   * TestSession findFirst
   */
  export type TestSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter, which TestSession to fetch.
     */
    where?: TestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSessions to fetch.
     */
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestSessions.
     */
    cursor?: TestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestSessions.
     */
    distinct?: TestSessionScalarFieldEnum | TestSessionScalarFieldEnum[]
  }

  /**
   * TestSession findFirstOrThrow
   */
  export type TestSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter, which TestSession to fetch.
     */
    where?: TestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSessions to fetch.
     */
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestSessions.
     */
    cursor?: TestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestSessions.
     */
    distinct?: TestSessionScalarFieldEnum | TestSessionScalarFieldEnum[]
  }

  /**
   * TestSession findMany
   */
  export type TestSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter, which TestSessions to fetch.
     */
    where?: TestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSessions to fetch.
     */
    orderBy?: TestSessionOrderByWithRelationInput | TestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestSessions.
     */
    cursor?: TestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSessions.
     */
    skip?: number
    distinct?: TestSessionScalarFieldEnum | TestSessionScalarFieldEnum[]
  }

  /**
   * TestSession create
   */
  export type TestSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TestSession.
     */
    data: XOR<TestSessionCreateInput, TestSessionUncheckedCreateInput>
  }

  /**
   * TestSession createMany
   */
  export type TestSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestSessions.
     */
    data: TestSessionCreateManyInput | TestSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestSession createManyAndReturn
   */
  export type TestSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TestSessions.
     */
    data: TestSessionCreateManyInput | TestSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestSession update
   */
  export type TestSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TestSession.
     */
    data: XOR<TestSessionUpdateInput, TestSessionUncheckedUpdateInput>
    /**
     * Choose, which TestSession to update.
     */
    where: TestSessionWhereUniqueInput
  }

  /**
   * TestSession updateMany
   */
  export type TestSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestSessions.
     */
    data: XOR<TestSessionUpdateManyMutationInput, TestSessionUncheckedUpdateManyInput>
    /**
     * Filter which TestSessions to update
     */
    where?: TestSessionWhereInput
    /**
     * Limit how many TestSessions to update.
     */
    limit?: number
  }

  /**
   * TestSession updateManyAndReturn
   */
  export type TestSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * The data used to update TestSessions.
     */
    data: XOR<TestSessionUpdateManyMutationInput, TestSessionUncheckedUpdateManyInput>
    /**
     * Filter which TestSessions to update
     */
    where?: TestSessionWhereInput
    /**
     * Limit how many TestSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestSession upsert
   */
  export type TestSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TestSession to update in case it exists.
     */
    where: TestSessionWhereUniqueInput
    /**
     * In case the TestSession found by the `where` argument doesn't exist, create a new TestSession with this data.
     */
    create: XOR<TestSessionCreateInput, TestSessionUncheckedCreateInput>
    /**
     * In case the TestSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestSessionUpdateInput, TestSessionUncheckedUpdateInput>
  }

  /**
   * TestSession delete
   */
  export type TestSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
    /**
     * Filter which TestSession to delete.
     */
    where: TestSessionWhereUniqueInput
  }

  /**
   * TestSession deleteMany
   */
  export type TestSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestSessions to delete
     */
    where?: TestSessionWhereInput
    /**
     * Limit how many TestSessions to delete.
     */
    limit?: number
  }

  /**
   * TestSession without action
   */
  export type TestSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSession
     */
    select?: TestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSession
     */
    omit?: TestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSessionInclude<ExtArgs> | null
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
    passwordHash: 'passwordHash',
    role: 'role',
    canApplyForQualification: 'canApplyForQualification',
    canDevelopStandards: 'canDevelopStandards',
    canAccreditCenters: 'canAccreditCenters',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QualificationStandardDeveloperScalarFieldEnum: {
    id: 'id',
    name: 'name',
    edrpou: 'edrpou'
  };

  export type QualificationStandardDeveloperScalarFieldEnum = (typeof QualificationStandardDeveloperScalarFieldEnum)[keyof typeof QualificationStandardDeveloperScalarFieldEnum]


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
    nqrLevel: 'nqrLevel',
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


  export const QualificationCenterAccreditationScalarFieldEnum: {
    id: 'id',
    professionalQualificationId: 'professionalQualificationId',
    qualificationCenterId: 'qualificationCenterId',
    accreditationDocumentId: 'accreditationDocumentId',
    naqCommissionDate: 'naqCommissionDate',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status'
  };

  export type QualificationCenterAccreditationScalarFieldEnum = (typeof QualificationCenterAccreditationScalarFieldEnum)[keyof typeof QualificationCenterAccreditationScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    qualificationCenterId: 'qualificationCenterId',
    professionalQualificationId: 'professionalQualificationId',
    certificateNumber: 'certificateNumber',
    certificateReceivedAt: 'certificateReceivedAt',
    userId: 'userId'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


  export const AccreditationExpertScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    professionalQualificationId: 'professionalQualificationId',
    userId: 'userId'
  };

  export type AccreditationExpertScalarFieldEnum = (typeof AccreditationExpertScalarFieldEnum)[keyof typeof AccreditationExpertScalarFieldEnum]


  export const QualificationCenterExpertiseScalarFieldEnum: {
    id: 'id',
    professionalQualificationId: 'professionalQualificationId',
    qualificationCenterId: 'qualificationCenterId',
    accreditationExpertId: 'accreditationExpertId',
    expertiseDate: 'expertiseDate',
    result: 'result',
    notes: 'notes'
  };

  export type QualificationCenterExpertiseScalarFieldEnum = (typeof QualificationCenterExpertiseScalarFieldEnum)[keyof typeof QualificationCenterExpertiseScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    professionalQualificationId: 'professionalQualificationId',
    preferredQualificationCenterId: 'preferredQualificationCenterId',
    qualificationCenterId: 'qualificationCenterId',
    status: 'status',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const TestSessionScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    qualificationCenterId: 'qualificationCenterId',
    scheduledAt: 'scheduledAt',
    result: 'result',
    notes: 'notes'
  };

  export type TestSessionScalarFieldEnum = (typeof TestSessionScalarFieldEnum)[keyof typeof TestSessionScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccreditationStatus'
   */
  export type EnumAccreditationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccreditationStatus'>
    


  /**
   * Reference to a field of type 'AccreditationStatus[]'
   */
  export type ListEnumAccreditationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccreditationStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'TestResult'
   */
  export type EnumTestResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestResult'>
    


  /**
   * Reference to a field of type 'TestResult[]'
   */
  export type ListEnumTestResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestResult[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    canApplyForQualification?: BoolFilter<"User"> | boolean
    canDevelopStandards?: BoolFilter<"User"> | boolean
    canAccreditCenters?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    accreditationExperts?: AccreditationExpertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    canApplyForQualification?: SortOrder
    canDevelopStandards?: SortOrder
    canAccreditCenters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    professionals?: ProfessionalOrderByRelationAggregateInput
    accreditationExperts?: AccreditationExpertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    canApplyForQualification?: BoolFilter<"User"> | boolean
    canDevelopStandards?: BoolFilter<"User"> | boolean
    canAccreditCenters?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applications?: ApplicationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    accreditationExperts?: AccreditationExpertListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    canApplyForQualification?: SortOrder
    canDevelopStandards?: SortOrder
    canAccreditCenters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    canApplyForQualification?: BoolWithAggregatesFilter<"User"> | boolean
    canDevelopStandards?: BoolWithAggregatesFilter<"User"> | boolean
    canAccreditCenters?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QualificationStandardDeveloperWhereInput = {
    AND?: QualificationStandardDeveloperWhereInput | QualificationStandardDeveloperWhereInput[]
    OR?: QualificationStandardDeveloperWhereInput[]
    NOT?: QualificationStandardDeveloperWhereInput | QualificationStandardDeveloperWhereInput[]
    id?: IntFilter<"QualificationStandardDeveloper"> | number
    name?: StringFilter<"QualificationStandardDeveloper"> | string
    edrpou?: StringFilter<"QualificationStandardDeveloper"> | string
    professions?: ProfessionListRelationFilter
  }

  export type QualificationStandardDeveloperOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    professions?: ProfessionOrderByRelationAggregateInput
  }

  export type QualificationStandardDeveloperWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QualificationStandardDeveloperWhereInput | QualificationStandardDeveloperWhereInput[]
    OR?: QualificationStandardDeveloperWhereInput[]
    NOT?: QualificationStandardDeveloperWhereInput | QualificationStandardDeveloperWhereInput[]
    name?: StringFilter<"QualificationStandardDeveloper"> | string
    edrpou?: StringFilter<"QualificationStandardDeveloper"> | string
    professions?: ProfessionListRelationFilter
  }, "id">

  export type QualificationStandardDeveloperOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    _count?: QualificationStandardDeveloperCountOrderByAggregateInput
    _avg?: QualificationStandardDeveloperAvgOrderByAggregateInput
    _max?: QualificationStandardDeveloperMaxOrderByAggregateInput
    _min?: QualificationStandardDeveloperMinOrderByAggregateInput
    _sum?: QualificationStandardDeveloperSumOrderByAggregateInput
  }

  export type QualificationStandardDeveloperScalarWhereWithAggregatesInput = {
    AND?: QualificationStandardDeveloperScalarWhereWithAggregatesInput | QualificationStandardDeveloperScalarWhereWithAggregatesInput[]
    OR?: QualificationStandardDeveloperScalarWhereWithAggregatesInput[]
    NOT?: QualificationStandardDeveloperScalarWhereWithAggregatesInput | QualificationStandardDeveloperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QualificationStandardDeveloper"> | number
    name?: StringWithAggregatesFilter<"QualificationStandardDeveloper"> | string
    edrpou?: StringWithAggregatesFilter<"QualificationStandardDeveloper"> | string
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
    qualificationStandardDeveloper?: XOR<QualificationStandardDeveloperScalarRelationFilter, QualificationStandardDeveloperWhereInput>
    professionalQualifications?: ProfessionalQualificationListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    developerId?: SortOrder
    approvalDate?: SortOrder
    qualificationStandardDeveloper?: QualificationStandardDeveloperOrderByWithRelationInput
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
    qualificationStandardDeveloper?: XOR<QualificationStandardDeveloperScalarRelationFilter, QualificationStandardDeveloperWhereInput>
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
    nqrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    qualificationCenterAccreditations?: QualificationCenterAccreditationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    accreditationExperts?: AccreditationExpertListRelationFilter
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type ProfessionalQualificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
    profession?: ProfessionOrderByWithRelationInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationOrderByRelationAggregateInput
    professionals?: ProfessionalOrderByRelationAggregateInput
    accreditationExperts?: AccreditationExpertOrderByRelationAggregateInput
    qualificationCenterExpertises?: QualificationCenterExpertiseOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type ProfessionalQualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    OR?: ProfessionalQualificationWhereInput[]
    NOT?: ProfessionalQualificationWhereInput | ProfessionalQualificationWhereInput[]
    name?: StringFilter<"ProfessionalQualification"> | string
    nqrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    qualificationCenterAccreditations?: QualificationCenterAccreditationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    accreditationExperts?: AccreditationExpertListRelationFilter
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id">

  export type ProfessionalQualificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nqrLevel?: SortOrder
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
    nqrLevel?: IntWithAggregatesFilter<"ProfessionalQualification"> | number
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
    qualificationCenterAccreditations?: QualificationCenterAccreditationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    preferredApplications?: ApplicationListRelationFilter
    assignedApplications?: ApplicationListRelationFilter
    testSessions?: TestSessionListRelationFilter
  }

  export type QualificationCenterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
    address?: SortOrder
    qualificationCenterAccreditations?: QualificationCenterAccreditationOrderByRelationAggregateInput
    professionals?: ProfessionalOrderByRelationAggregateInput
    qualificationCenterExpertises?: QualificationCenterExpertiseOrderByRelationAggregateInput
    preferredApplications?: ApplicationOrderByRelationAggregateInput
    assignedApplications?: ApplicationOrderByRelationAggregateInput
    testSessions?: TestSessionOrderByRelationAggregateInput
  }

  export type QualificationCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    OR?: QualificationCenterWhereInput[]
    NOT?: QualificationCenterWhereInput | QualificationCenterWhereInput[]
    name?: StringFilter<"QualificationCenter"> | string
    edrpou?: StringFilter<"QualificationCenter"> | string
    address?: StringFilter<"QualificationCenter"> | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationListRelationFilter
    professionals?: ProfessionalListRelationFilter
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    preferredApplications?: ApplicationListRelationFilter
    assignedApplications?: ApplicationListRelationFilter
    testSessions?: TestSessionListRelationFilter
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

  export type QualificationCenterAccreditationWhereInput = {
    AND?: QualificationCenterAccreditationWhereInput | QualificationCenterAccreditationWhereInput[]
    OR?: QualificationCenterAccreditationWhereInput[]
    NOT?: QualificationCenterAccreditationWhereInput | QualificationCenterAccreditationWhereInput[]
    id?: IntFilter<"QualificationCenterAccreditation"> | number
    professionalQualificationId?: IntFilter<"QualificationCenterAccreditation"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterAccreditation"> | number
    accreditationDocumentId?: StringFilter<"QualificationCenterAccreditation"> | string
    naqCommissionDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    startDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    endDate?: DateTimeNullableFilter<"QualificationCenterAccreditation"> | Date | string | null
    status?: EnumAccreditationStatusFilter<"QualificationCenterAccreditation"> | $Enums.AccreditationStatus
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }

  export type QualificationCenterAccreditationOrderByWithRelationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationDocumentId?: SortOrder
    naqCommissionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
  }

  export type QualificationCenterAccreditationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    professionalQualificationId_qualificationCenterId_accreditationDocumentId?: QualificationCenterAccreditationProfessionalQualificationIdQualificationCenterIdAccreditationDocumentIdCompoundUniqueInput
    AND?: QualificationCenterAccreditationWhereInput | QualificationCenterAccreditationWhereInput[]
    OR?: QualificationCenterAccreditationWhereInput[]
    NOT?: QualificationCenterAccreditationWhereInput | QualificationCenterAccreditationWhereInput[]
    professionalQualificationId?: IntFilter<"QualificationCenterAccreditation"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterAccreditation"> | number
    accreditationDocumentId?: StringFilter<"QualificationCenterAccreditation"> | string
    naqCommissionDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    startDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    endDate?: DateTimeNullableFilter<"QualificationCenterAccreditation"> | Date | string | null
    status?: EnumAccreditationStatusFilter<"QualificationCenterAccreditation"> | $Enums.AccreditationStatus
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }, "id" | "professionalQualificationId_qualificationCenterId_accreditationDocumentId">

  export type QualificationCenterAccreditationOrderByWithAggregationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationDocumentId?: SortOrder
    naqCommissionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: QualificationCenterAccreditationCountOrderByAggregateInput
    _avg?: QualificationCenterAccreditationAvgOrderByAggregateInput
    _max?: QualificationCenterAccreditationMaxOrderByAggregateInput
    _min?: QualificationCenterAccreditationMinOrderByAggregateInput
    _sum?: QualificationCenterAccreditationSumOrderByAggregateInput
  }

  export type QualificationCenterAccreditationScalarWhereWithAggregatesInput = {
    AND?: QualificationCenterAccreditationScalarWhereWithAggregatesInput | QualificationCenterAccreditationScalarWhereWithAggregatesInput[]
    OR?: QualificationCenterAccreditationScalarWhereWithAggregatesInput[]
    NOT?: QualificationCenterAccreditationScalarWhereWithAggregatesInput | QualificationCenterAccreditationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QualificationCenterAccreditation"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"QualificationCenterAccreditation"> | number
    qualificationCenterId?: IntWithAggregatesFilter<"QualificationCenterAccreditation"> | number
    accreditationDocumentId?: StringWithAggregatesFilter<"QualificationCenterAccreditation"> | string
    naqCommissionDate?: DateTimeWithAggregatesFilter<"QualificationCenterAccreditation"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"QualificationCenterAccreditation"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"QualificationCenterAccreditation"> | Date | string | null
    status?: EnumAccreditationStatusWithAggregatesFilter<"QualificationCenterAccreditation"> | $Enums.AccreditationStatus
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    id?: IntFilter<"Professional"> | number
    fullName?: StringFilter<"Professional"> | string
    qualificationCenterId?: IntFilter<"Professional"> | number
    professionalQualificationId?: IntFilter<"Professional"> | number
    certificateNumber?: StringFilter<"Professional"> | string
    certificateReceivedAt?: DateTimeFilter<"Professional"> | Date | string
    userId?: IntNullableFilter<"Professional"> | number | null
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    certificateNumber?: SortOrder
    certificateReceivedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    certificateNumber?: string
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    fullName?: StringFilter<"Professional"> | string
    qualificationCenterId?: IntFilter<"Professional"> | number
    professionalQualificationId?: IntFilter<"Professional"> | number
    certificateReceivedAt?: DateTimeFilter<"Professional"> | Date | string
    userId?: IntNullableFilter<"Professional"> | number | null
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "certificateNumber">

  export type ProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    certificateNumber?: SortOrder
    certificateReceivedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professional"> | number
    fullName?: StringWithAggregatesFilter<"Professional"> | string
    qualificationCenterId?: IntWithAggregatesFilter<"Professional"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"Professional"> | number
    certificateNumber?: StringWithAggregatesFilter<"Professional"> | string
    certificateReceivedAt?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Professional"> | number | null
  }

  export type AccreditationExpertWhereInput = {
    AND?: AccreditationExpertWhereInput | AccreditationExpertWhereInput[]
    OR?: AccreditationExpertWhereInput[]
    NOT?: AccreditationExpertWhereInput | AccreditationExpertWhereInput[]
    id?: IntFilter<"AccreditationExpert"> | number
    fullName?: StringFilter<"AccreditationExpert"> | string
    professionalQualificationId?: IntFilter<"AccreditationExpert"> | number
    userId?: IntNullableFilter<"AccreditationExpert"> | number | null
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AccreditationExpertOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type AccreditationExpertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccreditationExpertWhereInput | AccreditationExpertWhereInput[]
    OR?: AccreditationExpertWhereInput[]
    NOT?: AccreditationExpertWhereInput | AccreditationExpertWhereInput[]
    fullName?: StringFilter<"AccreditationExpert"> | string
    professionalQualificationId?: IntFilter<"AccreditationExpert"> | number
    userId?: IntNullableFilter<"AccreditationExpert"> | number | null
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenterExpertises?: QualificationCenterExpertiseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AccreditationExpertOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AccreditationExpertCountOrderByAggregateInput
    _avg?: AccreditationExpertAvgOrderByAggregateInput
    _max?: AccreditationExpertMaxOrderByAggregateInput
    _min?: AccreditationExpertMinOrderByAggregateInput
    _sum?: AccreditationExpertSumOrderByAggregateInput
  }

  export type AccreditationExpertScalarWhereWithAggregatesInput = {
    AND?: AccreditationExpertScalarWhereWithAggregatesInput | AccreditationExpertScalarWhereWithAggregatesInput[]
    OR?: AccreditationExpertScalarWhereWithAggregatesInput[]
    NOT?: AccreditationExpertScalarWhereWithAggregatesInput | AccreditationExpertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccreditationExpert"> | number
    fullName?: StringWithAggregatesFilter<"AccreditationExpert"> | string
    professionalQualificationId?: IntWithAggregatesFilter<"AccreditationExpert"> | number
    userId?: IntNullableWithAggregatesFilter<"AccreditationExpert"> | number | null
  }

  export type QualificationCenterExpertiseWhereInput = {
    AND?: QualificationCenterExpertiseWhereInput | QualificationCenterExpertiseWhereInput[]
    OR?: QualificationCenterExpertiseWhereInput[]
    NOT?: QualificationCenterExpertiseWhereInput | QualificationCenterExpertiseWhereInput[]
    id?: IntFilter<"QualificationCenterExpertise"> | number
    professionalQualificationId?: IntFilter<"QualificationCenterExpertise"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterExpertise"> | number
    accreditationExpertId?: IntFilter<"QualificationCenterExpertise"> | number
    expertiseDate?: DateTimeFilter<"QualificationCenterExpertise"> | Date | string
    result?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
    notes?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    accreditationExpert?: XOR<AccreditationExpertScalarRelationFilter, AccreditationExpertWhereInput>
  }

  export type QualificationCenterExpertiseOrderByWithRelationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
    expertiseDate?: SortOrder
    result?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
    accreditationExpert?: AccreditationExpertOrderByWithRelationInput
  }

  export type QualificationCenterExpertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QualificationCenterExpertiseWhereInput | QualificationCenterExpertiseWhereInput[]
    OR?: QualificationCenterExpertiseWhereInput[]
    NOT?: QualificationCenterExpertiseWhereInput | QualificationCenterExpertiseWhereInput[]
    professionalQualificationId?: IntFilter<"QualificationCenterExpertise"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterExpertise"> | number
    accreditationExpertId?: IntFilter<"QualificationCenterExpertise"> | number
    expertiseDate?: DateTimeFilter<"QualificationCenterExpertise"> | Date | string
    result?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
    notes?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
    accreditationExpert?: XOR<AccreditationExpertScalarRelationFilter, AccreditationExpertWhereInput>
  }, "id">

  export type QualificationCenterExpertiseOrderByWithAggregationInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
    expertiseDate?: SortOrder
    result?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: QualificationCenterExpertiseCountOrderByAggregateInput
    _avg?: QualificationCenterExpertiseAvgOrderByAggregateInput
    _max?: QualificationCenterExpertiseMaxOrderByAggregateInput
    _min?: QualificationCenterExpertiseMinOrderByAggregateInput
    _sum?: QualificationCenterExpertiseSumOrderByAggregateInput
  }

  export type QualificationCenterExpertiseScalarWhereWithAggregatesInput = {
    AND?: QualificationCenterExpertiseScalarWhereWithAggregatesInput | QualificationCenterExpertiseScalarWhereWithAggregatesInput[]
    OR?: QualificationCenterExpertiseScalarWhereWithAggregatesInput[]
    NOT?: QualificationCenterExpertiseScalarWhereWithAggregatesInput | QualificationCenterExpertiseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QualificationCenterExpertise"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"QualificationCenterExpertise"> | number
    qualificationCenterId?: IntWithAggregatesFilter<"QualificationCenterExpertise"> | number
    accreditationExpertId?: IntWithAggregatesFilter<"QualificationCenterExpertise"> | number
    expertiseDate?: DateTimeWithAggregatesFilter<"QualificationCenterExpertise"> | Date | string
    result?: StringNullableWithAggregatesFilter<"QualificationCenterExpertise"> | string | null
    notes?: StringNullableWithAggregatesFilter<"QualificationCenterExpertise"> | string | null
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    applicantId?: IntFilter<"Application"> | number
    professionalQualificationId?: IntFilter<"Application"> | number
    preferredQualificationCenterId?: IntNullableFilter<"Application"> | number | null
    qualificationCenterId?: IntNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    comment?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    preferredQualificationCenter?: XOR<QualificationCenterNullableScalarRelationFilter, QualificationCenterWhereInput> | null
    assignedQualificationCenter?: XOR<QualificationCenterNullableScalarRelationFilter, QualificationCenterWhereInput> | null
    testSessions?: TestSessionListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrderInput | SortOrder
    qualificationCenterId?: SortOrderInput | SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: UserOrderByWithRelationInput
    professionalQualification?: ProfessionalQualificationOrderByWithRelationInput
    preferredQualificationCenter?: QualificationCenterOrderByWithRelationInput
    assignedQualificationCenter?: QualificationCenterOrderByWithRelationInput
    testSessions?: TestSessionOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicantId?: IntFilter<"Application"> | number
    professionalQualificationId?: IntFilter<"Application"> | number
    preferredQualificationCenterId?: IntNullableFilter<"Application"> | number | null
    qualificationCenterId?: IntNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    comment?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
    professionalQualification?: XOR<ProfessionalQualificationScalarRelationFilter, ProfessionalQualificationWhereInput>
    preferredQualificationCenter?: XOR<QualificationCenterNullableScalarRelationFilter, QualificationCenterWhereInput> | null
    assignedQualificationCenter?: XOR<QualificationCenterNullableScalarRelationFilter, QualificationCenterWhereInput> | null
    testSessions?: TestSessionListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrderInput | SortOrder
    qualificationCenterId?: SortOrderInput | SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    applicantId?: IntWithAggregatesFilter<"Application"> | number
    professionalQualificationId?: IntWithAggregatesFilter<"Application"> | number
    preferredQualificationCenterId?: IntNullableWithAggregatesFilter<"Application"> | number | null
    qualificationCenterId?: IntNullableWithAggregatesFilter<"Application"> | number | null
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    comment?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type TestSessionWhereInput = {
    AND?: TestSessionWhereInput | TestSessionWhereInput[]
    OR?: TestSessionWhereInput[]
    NOT?: TestSessionWhereInput | TestSessionWhereInput[]
    id?: IntFilter<"TestSession"> | number
    applicationId?: IntFilter<"TestSession"> | number
    qualificationCenterId?: IntFilter<"TestSession"> | number
    scheduledAt?: DateTimeFilter<"TestSession"> | Date | string
    result?: EnumTestResultFilter<"TestSession"> | $Enums.TestResult
    notes?: StringNullableFilter<"TestSession"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }

  export type TestSessionOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
    scheduledAt?: SortOrder
    result?: SortOrder
    notes?: SortOrderInput | SortOrder
    application?: ApplicationOrderByWithRelationInput
    qualificationCenter?: QualificationCenterOrderByWithRelationInput
  }

  export type TestSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestSessionWhereInput | TestSessionWhereInput[]
    OR?: TestSessionWhereInput[]
    NOT?: TestSessionWhereInput | TestSessionWhereInput[]
    applicationId?: IntFilter<"TestSession"> | number
    qualificationCenterId?: IntFilter<"TestSession"> | number
    scheduledAt?: DateTimeFilter<"TestSession"> | Date | string
    result?: EnumTestResultFilter<"TestSession"> | $Enums.TestResult
    notes?: StringNullableFilter<"TestSession"> | string | null
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    qualificationCenter?: XOR<QualificationCenterScalarRelationFilter, QualificationCenterWhereInput>
  }, "id">

  export type TestSessionOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
    scheduledAt?: SortOrder
    result?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: TestSessionCountOrderByAggregateInput
    _avg?: TestSessionAvgOrderByAggregateInput
    _max?: TestSessionMaxOrderByAggregateInput
    _min?: TestSessionMinOrderByAggregateInput
    _sum?: TestSessionSumOrderByAggregateInput
  }

  export type TestSessionScalarWhereWithAggregatesInput = {
    AND?: TestSessionScalarWhereWithAggregatesInput | TestSessionScalarWhereWithAggregatesInput[]
    OR?: TestSessionScalarWhereWithAggregatesInput[]
    NOT?: TestSessionScalarWhereWithAggregatesInput | TestSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestSession"> | number
    applicationId?: IntWithAggregatesFilter<"TestSession"> | number
    qualificationCenterId?: IntWithAggregatesFilter<"TestSession"> | number
    scheduledAt?: DateTimeWithAggregatesFilter<"TestSession"> | Date | string
    result?: EnumTestResultWithAggregatesFilter<"TestSession"> | $Enums.TestResult
    notes?: StringNullableWithAggregatesFilter<"TestSession"> | string | null
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualificationStandardDeveloperCreateInput = {
    name: string
    edrpou: string
    professions?: ProfessionCreateNestedManyWithoutQualificationStandardDeveloperInput
  }

  export type QualificationStandardDeveloperUncheckedCreateInput = {
    id?: number
    name: string
    edrpou: string
    professions?: ProfessionUncheckedCreateNestedManyWithoutQualificationStandardDeveloperInput
  }

  export type QualificationStandardDeveloperUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    professions?: ProfessionUpdateManyWithoutQualificationStandardDeveloperNestedInput
  }

  export type QualificationStandardDeveloperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    professions?: ProfessionUncheckedUpdateManyWithoutQualificationStandardDeveloperNestedInput
  }

  export type QualificationStandardDeveloperCreateManyInput = {
    id?: number
    name: string
    edrpou: string
  }

  export type QualificationStandardDeveloperUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationStandardDeveloperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionCreateInput = {
    name: string
    code: string
    approvalDate?: Date | string
    qualificationStandardDeveloper: QualificationStandardDeveloperCreateNestedOneWithoutProfessionsInput
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
    qualificationStandardDeveloper?: QualificationStandardDeveloperUpdateOneRequiredWithoutProfessionsNestedInput
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
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationCreateManyInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
  }

  export type ProfessionalQualificationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalQualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationCenterCreateInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
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

  export type QualificationCenterAccreditationCreateInput = {
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutQualificationCenterAccreditationsInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutQualificationCenterAccreditationsInput
  }

  export type QualificationCenterAccreditationUncheckedCreateInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationUpdateInput = {
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput
  }

  export type QualificationCenterAccreditationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationCreateManyInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationUpdateManyMutationInput = {
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type ProfessionalCreateInput = {
    fullName: string
    certificateNumber: string
    certificateReceivedAt?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutProfessionalsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutProfessionalsInput
    user?: UserCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalUncheckedCreateInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type ProfessionalUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutProfessionalsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutProfessionalsNestedInput
    user?: UserUpdateOneWithoutProfessionalsNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfessionalCreateManyInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type ProfessionalUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccreditationExpertCreateInput = {
    fullName: string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutAccreditationExpertsInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutAccreditationExpertInput
    user?: UserCreateNestedOneWithoutAccreditationExpertsInput
  }

  export type AccreditationExpertUncheckedCreateInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    userId?: number | null
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutAccreditationExpertInput
  }

  export type AccreditationExpertUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutAccreditationExpertsNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutAccreditationExpertNestedInput
    user?: UserUpdateOneWithoutAccreditationExpertsNestedInput
  }

  export type AccreditationExpertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertNestedInput
  }

  export type AccreditationExpertCreateManyInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    userId?: number | null
  }

  export type AccreditationExpertUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type AccreditationExpertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QualificationCenterExpertiseCreateInput = {
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutQualificationCenterExpertisesInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutQualificationCenterExpertisesInput
    accreditationExpert: AccreditationExpertCreateNestedOneWithoutQualificationCenterExpertisesInput
  }

  export type QualificationCenterExpertiseUncheckedCreateInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseUpdateInput = {
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
    accreditationExpert?: AccreditationExpertUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
  }

  export type QualificationCenterExpertiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseCreateManyInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseUpdateManyMutationInput = {
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutApplicationsInput
    preferredQualificationCenter?: QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput
    assignedQualificationCenter?: QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput
    testSessions?: TestSessionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput
    preferredQualificationCenter?: QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput
    assignedQualificationCenter?: QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput
    testSessions?: TestSessionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testSessions?: TestSessionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestSessionCreateInput = {
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
    application: ApplicationCreateNestedOneWithoutTestSessionsInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutTestSessionsInput
  }

  export type TestSessionUncheckedCreateInput = {
    id?: number
    applicationId: number
    qualificationCenterId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type TestSessionUpdateInput = {
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutTestSessionsNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutTestSessionsNestedInput
  }

  export type TestSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSessionCreateManyInput = {
    id?: number
    applicationId: number
    qualificationCenterId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type TestSessionUpdateManyMutationInput = {
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ProfessionalListRelationFilter = {
    every?: ProfessionalWhereInput
    some?: ProfessionalWhereInput
    none?: ProfessionalWhereInput
  }

  export type AccreditationExpertListRelationFilter = {
    every?: AccreditationExpertWhereInput
    some?: AccreditationExpertWhereInput
    none?: AccreditationExpertWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccreditationExpertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    canApplyForQualification?: SortOrder
    canDevelopStandards?: SortOrder
    canAccreditCenters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    canApplyForQualification?: SortOrder
    canDevelopStandards?: SortOrder
    canAccreditCenters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    canApplyForQualification?: SortOrder
    canDevelopStandards?: SortOrder
    canAccreditCenters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProfessionListRelationFilter = {
    every?: ProfessionWhereInput
    some?: ProfessionWhereInput
    none?: ProfessionWhereInput
  }

  export type ProfessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualificationStandardDeveloperCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type QualificationStandardDeveloperAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QualificationStandardDeveloperMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type QualificationStandardDeveloperMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    edrpou?: SortOrder
  }

  export type QualificationStandardDeveloperSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QualificationStandardDeveloperScalarRelationFilter = {
    is?: QualificationStandardDeveloperWhereInput
    isNot?: QualificationStandardDeveloperWhereInput
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

  export type ProfessionScalarRelationFilter = {
    is?: ProfessionWhereInput
    isNot?: ProfessionWhereInput
  }

  export type QualificationCenterAccreditationListRelationFilter = {
    every?: QualificationCenterAccreditationWhereInput
    some?: QualificationCenterAccreditationWhereInput
    none?: QualificationCenterAccreditationWhereInput
  }

  export type QualificationCenterExpertiseListRelationFilter = {
    every?: QualificationCenterExpertiseWhereInput
    some?: QualificationCenterExpertiseWhereInput
    none?: QualificationCenterExpertiseWhereInput
  }

  export type QualificationCenterAccreditationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualificationCenterExpertiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalQualificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationAvgOrderByAggregateInput = {
    id?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type ProfessionalQualificationSumOrderByAggregateInput = {
    id?: SortOrder
    nqrLevel?: SortOrder
    professionId?: SortOrder
  }

  export type TestSessionListRelationFilter = {
    every?: TestSessionWhereInput
    some?: TestSessionWhereInput
    none?: TestSessionWhereInput
  }

  export type TestSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAccreditationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccreditationStatus | EnumAccreditationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccreditationStatusFilter<$PrismaModel> | $Enums.AccreditationStatus
  }

  export type ProfessionalQualificationScalarRelationFilter = {
    is?: ProfessionalQualificationWhereInput
    isNot?: ProfessionalQualificationWhereInput
  }

  export type QualificationCenterScalarRelationFilter = {
    is?: QualificationCenterWhereInput
    isNot?: QualificationCenterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QualificationCenterAccreditationProfessionalQualificationIdQualificationCenterIdAccreditationDocumentIdCompoundUniqueInput = {
    professionalQualificationId: number
    qualificationCenterId: number
    accreditationDocumentId: string
  }

  export type QualificationCenterAccreditationCountOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationDocumentId?: SortOrder
    naqCommissionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type QualificationCenterAccreditationAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type QualificationCenterAccreditationMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationDocumentId?: SortOrder
    naqCommissionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type QualificationCenterAccreditationMinOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationDocumentId?: SortOrder
    naqCommissionDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type QualificationCenterAccreditationSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAccreditationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccreditationStatus | EnumAccreditationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccreditationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccreditationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccreditationStatusFilter<$PrismaModel>
    _max?: NestedEnumAccreditationStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    certificateNumber?: SortOrder
    certificateReceivedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    id?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    certificateNumber?: SortOrder
    certificateReceivedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    certificateNumber?: SortOrder
    certificateReceivedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    id?: SortOrder
    qualificationCenterId?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AccreditationExpertCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type AccreditationExpertAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type AccreditationExpertMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type AccreditationExpertMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
  }

  export type AccreditationExpertSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    userId?: SortOrder
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

  export type AccreditationExpertScalarRelationFilter = {
    is?: AccreditationExpertWhereInput
    isNot?: AccreditationExpertWhereInput
  }

  export type QualificationCenterExpertiseCountOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
    expertiseDate?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type QualificationCenterExpertiseAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
  }

  export type QualificationCenterExpertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
    expertiseDate?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type QualificationCenterExpertiseMinOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
    expertiseDate?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type QualificationCenterExpertiseSumOrderByAggregateInput = {
    id?: SortOrder
    professionalQualificationId?: SortOrder
    qualificationCenterId?: SortOrder
    accreditationExpertId?: SortOrder
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

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QualificationCenterNullableScalarRelationFilter = {
    is?: QualificationCenterWhereInput | null
    isNot?: QualificationCenterWhereInput | null
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrder
    qualificationCenterId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrder
    qualificationCenterId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrder
    qualificationCenterId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    professionalQualificationId?: SortOrder
    preferredQualificationCenterId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumTestResultFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | EnumTestResultFieldRefInput<$PrismaModel>
    in?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    not?: NestedEnumTestResultFilter<$PrismaModel> | $Enums.TestResult
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type TestSessionCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
    scheduledAt?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type TestSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type TestSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
    scheduledAt?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type TestSessionMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
    scheduledAt?: SortOrder
    result?: SortOrder
    notes?: SortOrder
  }

  export type TestSessionSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    qualificationCenterId?: SortOrder
  }

  export type EnumTestResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | EnumTestResultFieldRefInput<$PrismaModel>
    in?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    not?: NestedEnumTestResultWithAggregatesFilter<$PrismaModel> | $Enums.TestResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestResultFilter<$PrismaModel>
    _max?: NestedEnumTestResultFilter<$PrismaModel>
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ProfessionalCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AccreditationExpertCreateNestedManyWithoutUserInput = {
    create?: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput> | AccreditationExpertCreateWithoutUserInput[] | AccreditationExpertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutUserInput | AccreditationExpertCreateOrConnectWithoutUserInput[]
    createMany?: AccreditationExpertCreateManyUserInputEnvelope
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AccreditationExpertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput> | AccreditationExpertCreateWithoutUserInput[] | AccreditationExpertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutUserInput | AccreditationExpertCreateOrConnectWithoutUserInput[]
    createMany?: AccreditationExpertCreateManyUserInputEnvelope
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ProfessionalUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutUserInput | ProfessionalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutUserInput | ProfessionalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutUserInput | ProfessionalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AccreditationExpertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput> | AccreditationExpertCreateWithoutUserInput[] | AccreditationExpertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutUserInput | AccreditationExpertCreateOrConnectWithoutUserInput[]
    upsert?: AccreditationExpertUpsertWithWhereUniqueWithoutUserInput | AccreditationExpertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccreditationExpertCreateManyUserInputEnvelope
    set?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    disconnect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    delete?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    update?: AccreditationExpertUpdateWithWhereUniqueWithoutUserInput | AccreditationExpertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccreditationExpertUpdateManyWithWhereWithoutUserInput | AccreditationExpertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput> | ProfessionalCreateWithoutUserInput[] | ProfessionalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput | ProfessionalCreateOrConnectWithoutUserInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutUserInput | ProfessionalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfessionalCreateManyUserInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutUserInput | ProfessionalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutUserInput | ProfessionalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AccreditationExpertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput> | AccreditationExpertCreateWithoutUserInput[] | AccreditationExpertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutUserInput | AccreditationExpertCreateOrConnectWithoutUserInput[]
    upsert?: AccreditationExpertUpsertWithWhereUniqueWithoutUserInput | AccreditationExpertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccreditationExpertCreateManyUserInputEnvelope
    set?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    disconnect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    delete?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    update?: AccreditationExpertUpdateWithWhereUniqueWithoutUserInput | AccreditationExpertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccreditationExpertUpdateManyWithWhereWithoutUserInput | AccreditationExpertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
  }

  export type ProfessionCreateNestedManyWithoutQualificationStandardDeveloperInput = {
    create?: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput> | ProfessionCreateWithoutQualificationStandardDeveloperInput[] | ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput | ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput[]
    createMany?: ProfessionCreateManyQualificationStandardDeveloperInputEnvelope
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type ProfessionUncheckedCreateNestedManyWithoutQualificationStandardDeveloperInput = {
    create?: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput> | ProfessionCreateWithoutQualificationStandardDeveloperInput[] | ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput | ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput[]
    createMany?: ProfessionCreateManyQualificationStandardDeveloperInputEnvelope
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type ProfessionUpdateManyWithoutQualificationStandardDeveloperNestedInput = {
    create?: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput> | ProfessionCreateWithoutQualificationStandardDeveloperInput[] | ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput | ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutQualificationStandardDeveloperInput | ProfessionUpsertWithWhereUniqueWithoutQualificationStandardDeveloperInput[]
    createMany?: ProfessionCreateManyQualificationStandardDeveloperInputEnvelope
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutQualificationStandardDeveloperInput | ProfessionUpdateWithWhereUniqueWithoutQualificationStandardDeveloperInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutQualificationStandardDeveloperInput | ProfessionUpdateManyWithWhereWithoutQualificationStandardDeveloperInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type ProfessionUncheckedUpdateManyWithoutQualificationStandardDeveloperNestedInput = {
    create?: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput> | ProfessionCreateWithoutQualificationStandardDeveloperInput[] | ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput | ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutQualificationStandardDeveloperInput | ProfessionUpsertWithWhereUniqueWithoutQualificationStandardDeveloperInput[]
    createMany?: ProfessionCreateManyQualificationStandardDeveloperInputEnvelope
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutQualificationStandardDeveloperInput | ProfessionUpdateWithWhereUniqueWithoutQualificationStandardDeveloperInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutQualificationStandardDeveloperInput | ProfessionUpdateManyWithWhereWithoutQualificationStandardDeveloperInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type QualificationStandardDeveloperCreateNestedOneWithoutProfessionsInput = {
    create?: XOR<QualificationStandardDeveloperCreateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: QualificationStandardDeveloperCreateOrConnectWithoutProfessionsInput
    connect?: QualificationStandardDeveloperWhereUniqueInput
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

  export type QualificationStandardDeveloperUpdateOneRequiredWithoutProfessionsNestedInput = {
    create?: XOR<QualificationStandardDeveloperCreateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: QualificationStandardDeveloperCreateOrConnectWithoutProfessionsInput
    upsert?: QualificationStandardDeveloperUpsertWithoutProfessionsInput
    connect?: QualificationStandardDeveloperWhereUniqueInput
    update?: XOR<XOR<QualificationStandardDeveloperUpdateToOneWithWhereWithoutProfessionsInput, QualificationStandardDeveloperUpdateWithoutProfessionsInput>, QualificationStandardDeveloperUncheckedUpdateWithoutProfessionsInput>
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

  export type QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput[] | QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterAccreditationCreateManyProfessionalQualificationInputEnvelope
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
  }

  export type ProfessionalCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput> | ProfessionalCreateWithoutProfessionalQualificationInput[] | ProfessionalUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionalQualificationInput | ProfessionalCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ProfessionalCreateManyProfessionalQualificationInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationExpertCreateWithoutProfessionalQualificationInput[] | AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput | AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: AccreditationExpertCreateManyProfessionalQualificationInputEnvelope
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
  }

  export type QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput[] | QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterExpertiseCreateManyProfessionalQualificationInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput> | ApplicationCreateWithoutProfessionalQualificationInput[] | ApplicationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutProfessionalQualificationInput | ApplicationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ApplicationCreateManyProfessionalQualificationInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput[] | QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterAccreditationCreateManyProfessionalQualificationInputEnvelope
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput> | ProfessionalCreateWithoutProfessionalQualificationInput[] | ProfessionalUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionalQualificationInput | ProfessionalCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ProfessionalCreateManyProfessionalQualificationInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationExpertCreateWithoutProfessionalQualificationInput[] | AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput | AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: AccreditationExpertCreateManyProfessionalQualificationInputEnvelope
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
  }

  export type QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput[] | QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterExpertiseCreateManyProfessionalQualificationInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput = {
    create?: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput> | ApplicationCreateWithoutProfessionalQualificationInput[] | ApplicationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutProfessionalQualificationInput | ApplicationCreateOrConnectWithoutProfessionalQualificationInput[]
    createMany?: ApplicationCreateManyProfessionalQualificationInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput = {
    create?: XOR<ProfessionCreateWithoutProfessionalQualificationsInput, ProfessionUncheckedCreateWithoutProfessionalQualificationsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutProfessionalQualificationsInput
    upsert?: ProfessionUpsertWithoutProfessionalQualificationsInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutProfessionalQualificationsInput, ProfessionUpdateWithoutProfessionalQualificationsInput>, ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput>
  }

  export type QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput[] | QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: QualificationCenterAccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterAccreditationCreateManyProfessionalQualificationInputEnvelope
    set?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    disconnect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    delete?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    update?: QualificationCenterAccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: QualificationCenterAccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
  }

  export type ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput> | ProfessionalCreateWithoutProfessionalQualificationInput[] | ProfessionalUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionalQualificationInput | ProfessionalCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ProfessionalUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ProfessionalCreateManyProfessionalQualificationInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ProfessionalUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutProfessionalQualificationInput | ProfessionalUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationExpertCreateWithoutProfessionalQualificationInput[] | AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput | AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: AccreditationExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: AccreditationExpertCreateManyProfessionalQualificationInputEnvelope
    set?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    disconnect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    delete?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    update?: AccreditationExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: AccreditationExpertUpdateManyWithWhereWithoutProfessionalQualificationInput | AccreditationExpertUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
  }

  export type QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput[] | QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterExpertiseCreateManyProfessionalQualificationInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput> | ApplicationCreateWithoutProfessionalQualificationInput[] | ApplicationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutProfessionalQualificationInput | ApplicationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ApplicationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ApplicationCreateManyProfessionalQualificationInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ApplicationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutProfessionalQualificationInput | ApplicationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput[] | QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: QualificationCenterAccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterAccreditationCreateManyProfessionalQualificationInputEnvelope
    set?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    disconnect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    delete?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    update?: QualificationCenterAccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: QualificationCenterAccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput | QualificationCenterAccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput> | ProfessionalCreateWithoutProfessionalQualificationInput[] | ProfessionalUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutProfessionalQualificationInput | ProfessionalCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ProfessionalUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ProfessionalCreateManyProfessionalQualificationInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ProfessionalUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutProfessionalQualificationInput | ProfessionalUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput> | AccreditationExpertCreateWithoutProfessionalQualificationInput[] | AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput | AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: AccreditationExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: AccreditationExpertCreateManyProfessionalQualificationInputEnvelope
    set?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    disconnect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    delete?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    connect?: AccreditationExpertWhereUniqueInput | AccreditationExpertWhereUniqueInput[]
    update?: AccreditationExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput | AccreditationExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: AccreditationExpertUpdateManyWithWhereWithoutProfessionalQualificationInput | AccreditationExpertUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput> | QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput[] | QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput | QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: QualificationCenterExpertiseCreateManyProfessionalQualificationInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutProfessionalQualificationInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput = {
    create?: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput> | ApplicationCreateWithoutProfessionalQualificationInput[] | ApplicationUncheckedCreateWithoutProfessionalQualificationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutProfessionalQualificationInput | ApplicationCreateOrConnectWithoutProfessionalQualificationInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutProfessionalQualificationInput | ApplicationUpsertWithWhereUniqueWithoutProfessionalQualificationInput[]
    createMany?: ApplicationCreateManyProfessionalQualificationInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutProfessionalQualificationInput | ApplicationUpdateWithWhereUniqueWithoutProfessionalQualificationInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutProfessionalQualificationInput | ApplicationUpdateManyWithWhereWithoutProfessionalQualificationInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterAccreditationCreateWithoutQualificationCenterInput[] | QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput | QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: QualificationCenterAccreditationCreateManyQualificationCenterInputEnvelope
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
  }

  export type ProfessionalCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput> | ProfessionalCreateWithoutQualificationCenterInput[] | ProfessionalUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutQualificationCenterInput | ProfessionalCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: ProfessionalCreateManyQualificationCenterInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterExpertiseCreateWithoutQualificationCenterInput[] | QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput | QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: QualificationCenterExpertiseCreateManyQualificationCenterInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput = {
    create?: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput> | ApplicationCreateWithoutPreferredQualificationCenterInput[] | ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput | ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput[]
    createMany?: ApplicationCreateManyPreferredQualificationCenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput = {
    create?: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput> | ApplicationCreateWithoutAssignedQualificationCenterInput[] | ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput | ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput[]
    createMany?: ApplicationCreateManyAssignedQualificationCenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type TestSessionCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput> | TestSessionCreateWithoutQualificationCenterInput[] | TestSessionUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutQualificationCenterInput | TestSessionCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: TestSessionCreateManyQualificationCenterInputEnvelope
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
  }

  export type QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterAccreditationCreateWithoutQualificationCenterInput[] | QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput | QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: QualificationCenterAccreditationCreateManyQualificationCenterInputEnvelope
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput> | ProfessionalCreateWithoutQualificationCenterInput[] | ProfessionalUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutQualificationCenterInput | ProfessionalCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: ProfessionalCreateManyQualificationCenterInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterExpertiseCreateWithoutQualificationCenterInput[] | QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput | QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: QualificationCenterExpertiseCreateManyQualificationCenterInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput = {
    create?: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput> | ApplicationCreateWithoutPreferredQualificationCenterInput[] | ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput | ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput[]
    createMany?: ApplicationCreateManyPreferredQualificationCenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput = {
    create?: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput> | ApplicationCreateWithoutAssignedQualificationCenterInput[] | ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput | ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput[]
    createMany?: ApplicationCreateManyAssignedQualificationCenterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput = {
    create?: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput> | TestSessionCreateWithoutQualificationCenterInput[] | TestSessionUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutQualificationCenterInput | TestSessionCreateOrConnectWithoutQualificationCenterInput[]
    createMany?: TestSessionCreateManyQualificationCenterInputEnvelope
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
  }

  export type QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterAccreditationCreateWithoutQualificationCenterInput[] | QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput | QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: QualificationCenterAccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterAccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: QualificationCenterAccreditationCreateManyQualificationCenterInputEnvelope
    set?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    disconnect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    delete?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    update?: QualificationCenterAccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterAccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: QualificationCenterAccreditationUpdateManyWithWhereWithoutQualificationCenterInput | QualificationCenterAccreditationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
  }

  export type ProfessionalUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput> | ProfessionalCreateWithoutQualificationCenterInput[] | ProfessionalUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutQualificationCenterInput | ProfessionalCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutQualificationCenterInput | ProfessionalUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: ProfessionalCreateManyQualificationCenterInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutQualificationCenterInput | ProfessionalUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutQualificationCenterInput | ProfessionalUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterExpertiseCreateWithoutQualificationCenterInput[] | QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput | QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: QualificationCenterExpertiseCreateManyQualificationCenterInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutQualificationCenterInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput> | ApplicationCreateWithoutPreferredQualificationCenterInput[] | ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput | ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPreferredQualificationCenterInput | ApplicationUpsertWithWhereUniqueWithoutPreferredQualificationCenterInput[]
    createMany?: ApplicationCreateManyPreferredQualificationCenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPreferredQualificationCenterInput | ApplicationUpdateWithWhereUniqueWithoutPreferredQualificationCenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPreferredQualificationCenterInput | ApplicationUpdateManyWithWhereWithoutPreferredQualificationCenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput> | ApplicationCreateWithoutAssignedQualificationCenterInput[] | ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput | ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutAssignedQualificationCenterInput | ApplicationUpsertWithWhereUniqueWithoutAssignedQualificationCenterInput[]
    createMany?: ApplicationCreateManyAssignedQualificationCenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutAssignedQualificationCenterInput | ApplicationUpdateWithWhereUniqueWithoutAssignedQualificationCenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutAssignedQualificationCenterInput | ApplicationUpdateManyWithWhereWithoutAssignedQualificationCenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type TestSessionUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput> | TestSessionCreateWithoutQualificationCenterInput[] | TestSessionUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutQualificationCenterInput | TestSessionCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: TestSessionUpsertWithWhereUniqueWithoutQualificationCenterInput | TestSessionUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: TestSessionCreateManyQualificationCenterInputEnvelope
    set?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    disconnect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    delete?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    update?: TestSessionUpdateWithWhereUniqueWithoutQualificationCenterInput | TestSessionUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: TestSessionUpdateManyWithWhereWithoutQualificationCenterInput | TestSessionUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
  }

  export type QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterAccreditationCreateWithoutQualificationCenterInput[] | QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput | QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: QualificationCenterAccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterAccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: QualificationCenterAccreditationCreateManyQualificationCenterInputEnvelope
    set?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    disconnect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    delete?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    connect?: QualificationCenterAccreditationWhereUniqueInput | QualificationCenterAccreditationWhereUniqueInput[]
    update?: QualificationCenterAccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterAccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: QualificationCenterAccreditationUpdateManyWithWhereWithoutQualificationCenterInput | QualificationCenterAccreditationUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput> | ProfessionalCreateWithoutQualificationCenterInput[] | ProfessionalUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutQualificationCenterInput | ProfessionalCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutQualificationCenterInput | ProfessionalUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: ProfessionalCreateManyQualificationCenterInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutQualificationCenterInput | ProfessionalUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutQualificationCenterInput | ProfessionalUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput> | QualificationCenterExpertiseCreateWithoutQualificationCenterInput[] | QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput | QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: QualificationCenterExpertiseCreateManyQualificationCenterInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutQualificationCenterInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutQualificationCenterInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput> | ApplicationCreateWithoutPreferredQualificationCenterInput[] | ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput | ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPreferredQualificationCenterInput | ApplicationUpsertWithWhereUniqueWithoutPreferredQualificationCenterInput[]
    createMany?: ApplicationCreateManyPreferredQualificationCenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPreferredQualificationCenterInput | ApplicationUpdateWithWhereUniqueWithoutPreferredQualificationCenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPreferredQualificationCenterInput | ApplicationUpdateManyWithWhereWithoutPreferredQualificationCenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput = {
    create?: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput> | ApplicationCreateWithoutAssignedQualificationCenterInput[] | ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput | ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutAssignedQualificationCenterInput | ApplicationUpsertWithWhereUniqueWithoutAssignedQualificationCenterInput[]
    createMany?: ApplicationCreateManyAssignedQualificationCenterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutAssignedQualificationCenterInput | ApplicationUpdateWithWhereUniqueWithoutAssignedQualificationCenterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutAssignedQualificationCenterInput | ApplicationUpdateManyWithWhereWithoutAssignedQualificationCenterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput = {
    create?: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput> | TestSessionCreateWithoutQualificationCenterInput[] | TestSessionUncheckedCreateWithoutQualificationCenterInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutQualificationCenterInput | TestSessionCreateOrConnectWithoutQualificationCenterInput[]
    upsert?: TestSessionUpsertWithWhereUniqueWithoutQualificationCenterInput | TestSessionUpsertWithWhereUniqueWithoutQualificationCenterInput[]
    createMany?: TestSessionCreateManyQualificationCenterInputEnvelope
    set?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    disconnect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    delete?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    update?: TestSessionUpdateWithWhereUniqueWithoutQualificationCenterInput | TestSessionUpdateWithWhereUniqueWithoutQualificationCenterInput[]
    updateMany?: TestSessionUpdateManyWithWhereWithoutQualificationCenterInput | TestSessionUpdateManyWithWhereWithoutQualificationCenterInput[]
    deleteMany?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
  }

  export type ProfessionalQualificationCreateNestedOneWithoutQualificationCenterAccreditationsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutQualificationCenterAccreditationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutQualificationCenterAccreditationsInput = {
    create?: XOR<QualificationCenterCreateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutQualificationCenterAccreditationsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAccreditationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccreditationStatus
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutQualificationCenterAccreditationsInput
    upsert?: ProfessionalQualificationUpsertWithoutQualificationCenterAccreditationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUpdateWithoutQualificationCenterAccreditationsInput>, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
  }

  export type QualificationCenterUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutQualificationCenterAccreditationsInput
    upsert?: QualificationCenterUpsertWithoutQualificationCenterAccreditationsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutQualificationCenterAccreditationsInput, QualificationCenterUpdateWithoutQualificationCenterAccreditationsInput>, QualificationCenterUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
  }

  export type QualificationCenterCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<QualificationCenterCreateWithoutProfessionalsInput, QualificationCenterUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutProfessionalsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type ProfessionalQualificationCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionalsInput, ProfessionalQualificationUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionalsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalsInput
    connect?: UserWhereUniqueInput
  }

  export type QualificationCenterUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutProfessionalsInput, QualificationCenterUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutProfessionalsInput
    upsert?: QualificationCenterUpsertWithoutProfessionalsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutProfessionalsInput, QualificationCenterUpdateWithoutProfessionalsInput>, QualificationCenterUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutProfessionalsInput, ProfessionalQualificationUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutProfessionalsInput
    upsert?: ProfessionalQualificationUpsertWithoutProfessionalsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutProfessionalsInput, ProfessionalQualificationUpdateWithoutProfessionalsInput>, ProfessionalQualificationUncheckedUpdateWithoutProfessionalsInput>
  }

  export type UserUpdateOneWithoutProfessionalsNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalsInput
    upsert?: UserUpsertWithoutProfessionalsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalsInput, UserUpdateWithoutProfessionalsInput>, UserUncheckedUpdateWithoutProfessionalsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessionalQualificationCreateNestedOneWithoutAccreditationExpertsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationExpertsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutAccreditationExpertsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterExpertiseCreateNestedManyWithoutAccreditationExpertInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput> | QualificationCenterExpertiseCreateWithoutAccreditationExpertInput[] | QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput | QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput[]
    createMany?: QualificationCenterExpertiseCreateManyAccreditationExpertInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAccreditationExpertsInput = {
    create?: XOR<UserCreateWithoutAccreditationExpertsInput, UserUncheckedCreateWithoutAccreditationExpertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccreditationExpertsInput
    connect?: UserWhereUniqueInput
  }

  export type QualificationCenterExpertiseUncheckedCreateNestedManyWithoutAccreditationExpertInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput> | QualificationCenterExpertiseCreateWithoutAccreditationExpertInput[] | QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput | QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput[]
    createMany?: QualificationCenterExpertiseCreateManyAccreditationExpertInputEnvelope
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutAccreditationExpertsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationExpertsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutAccreditationExpertsInput
    upsert?: ProfessionalQualificationUpsertWithoutAccreditationExpertsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutAccreditationExpertsInput, ProfessionalQualificationUpdateWithoutAccreditationExpertsInput>, ProfessionalQualificationUncheckedUpdateWithoutAccreditationExpertsInput>
  }

  export type QualificationCenterExpertiseUpdateManyWithoutAccreditationExpertNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput> | QualificationCenterExpertiseCreateWithoutAccreditationExpertInput[] | QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput | QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutAccreditationExpertInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutAccreditationExpertInput[]
    createMany?: QualificationCenterExpertiseCreateManyAccreditationExpertInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutAccreditationExpertInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutAccreditationExpertInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutAccreditationExpertInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutAccreditationExpertInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAccreditationExpertsNestedInput = {
    create?: XOR<UserCreateWithoutAccreditationExpertsInput, UserUncheckedCreateWithoutAccreditationExpertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccreditationExpertsInput
    upsert?: UserUpsertWithoutAccreditationExpertsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccreditationExpertsInput, UserUpdateWithoutAccreditationExpertsInput>, UserUncheckedUpdateWithoutAccreditationExpertsInput>
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertNestedInput = {
    create?: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput> | QualificationCenterExpertiseCreateWithoutAccreditationExpertInput[] | QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput[]
    connectOrCreate?: QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput | QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput[]
    upsert?: QualificationCenterExpertiseUpsertWithWhereUniqueWithoutAccreditationExpertInput | QualificationCenterExpertiseUpsertWithWhereUniqueWithoutAccreditationExpertInput[]
    createMany?: QualificationCenterExpertiseCreateManyAccreditationExpertInputEnvelope
    set?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    disconnect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    delete?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    connect?: QualificationCenterExpertiseWhereUniqueInput | QualificationCenterExpertiseWhereUniqueInput[]
    update?: QualificationCenterExpertiseUpdateWithWhereUniqueWithoutAccreditationExpertInput | QualificationCenterExpertiseUpdateWithWhereUniqueWithoutAccreditationExpertInput[]
    updateMany?: QualificationCenterExpertiseUpdateManyWithWhereWithoutAccreditationExpertInput | QualificationCenterExpertiseUpdateManyWithWhereWithoutAccreditationExpertInput[]
    deleteMany?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
  }

  export type ProfessionalQualificationCreateNestedOneWithoutQualificationCenterExpertisesInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutQualificationCenterExpertisesInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutQualificationCenterExpertisesInput = {
    create?: XOR<QualificationCenterCreateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutQualificationCenterExpertisesInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type AccreditationExpertCreateNestedOneWithoutQualificationCenterExpertisesInput = {
    create?: XOR<AccreditationExpertCreateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutQualificationCenterExpertisesInput
    connect?: AccreditationExpertWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutQualificationCenterExpertisesInput
    upsert?: ProfessionalQualificationUpsertWithoutQualificationCenterExpertisesInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUpdateWithoutQualificationCenterExpertisesInput>, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type QualificationCenterUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutQualificationCenterExpertisesInput
    upsert?: QualificationCenterUpsertWithoutQualificationCenterExpertisesInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput, QualificationCenterUpdateWithoutQualificationCenterExpertisesInput>, QualificationCenterUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type AccreditationExpertUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput = {
    create?: XOR<AccreditationExpertCreateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedCreateWithoutQualificationCenterExpertisesInput>
    connectOrCreate?: AccreditationExpertCreateOrConnectWithoutQualificationCenterExpertisesInput
    upsert?: AccreditationExpertUpsertWithoutQualificationCenterExpertisesInput
    connect?: AccreditationExpertWhereUniqueInput
    update?: XOR<XOR<AccreditationExpertUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput, AccreditationExpertUpdateWithoutQualificationCenterExpertisesInput>, AccreditationExpertUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProfessionalQualificationCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutApplicationsInput, ProfessionalQualificationUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutApplicationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput = {
    create?: XOR<QualificationCenterCreateWithoutPreferredApplicationsInput, QualificationCenterUncheckedCreateWithoutPreferredApplicationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutPreferredApplicationsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput = {
    create?: XOR<QualificationCenterCreateWithoutAssignedApplicationsInput, QualificationCenterUncheckedCreateWithoutAssignedApplicationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutAssignedApplicationsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type TestSessionCreateNestedManyWithoutApplicationInput = {
    create?: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput> | TestSessionCreateWithoutApplicationInput[] | TestSessionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutApplicationInput | TestSessionCreateOrConnectWithoutApplicationInput[]
    createMany?: TestSessionCreateManyApplicationInputEnvelope
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
  }

  export type TestSessionUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput> | TestSessionCreateWithoutApplicationInput[] | TestSessionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutApplicationInput | TestSessionCreateOrConnectWithoutApplicationInput[]
    createMany?: TestSessionCreateManyApplicationInputEnvelope
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ProfessionalQualificationCreateWithoutApplicationsInput, ProfessionalQualificationUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ProfessionalQualificationCreateOrConnectWithoutApplicationsInput
    upsert?: ProfessionalQualificationUpsertWithoutApplicationsInput
    connect?: ProfessionalQualificationWhereUniqueInput
    update?: XOR<XOR<ProfessionalQualificationUpdateToOneWithWhereWithoutApplicationsInput, ProfessionalQualificationUpdateWithoutApplicationsInput>, ProfessionalQualificationUncheckedUpdateWithoutApplicationsInput>
  }

  export type QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutPreferredApplicationsInput, QualificationCenterUncheckedCreateWithoutPreferredApplicationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutPreferredApplicationsInput
    upsert?: QualificationCenterUpsertWithoutPreferredApplicationsInput
    disconnect?: QualificationCenterWhereInput | boolean
    delete?: QualificationCenterWhereInput | boolean
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutPreferredApplicationsInput, QualificationCenterUpdateWithoutPreferredApplicationsInput>, QualificationCenterUncheckedUpdateWithoutPreferredApplicationsInput>
  }

  export type QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutAssignedApplicationsInput, QualificationCenterUncheckedCreateWithoutAssignedApplicationsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutAssignedApplicationsInput
    upsert?: QualificationCenterUpsertWithoutAssignedApplicationsInput
    disconnect?: QualificationCenterWhereInput | boolean
    delete?: QualificationCenterWhereInput | boolean
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutAssignedApplicationsInput, QualificationCenterUpdateWithoutAssignedApplicationsInput>, QualificationCenterUncheckedUpdateWithoutAssignedApplicationsInput>
  }

  export type TestSessionUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput> | TestSessionCreateWithoutApplicationInput[] | TestSessionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutApplicationInput | TestSessionCreateOrConnectWithoutApplicationInput[]
    upsert?: TestSessionUpsertWithWhereUniqueWithoutApplicationInput | TestSessionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: TestSessionCreateManyApplicationInputEnvelope
    set?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    disconnect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    delete?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    update?: TestSessionUpdateWithWhereUniqueWithoutApplicationInput | TestSessionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: TestSessionUpdateManyWithWhereWithoutApplicationInput | TestSessionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
  }

  export type TestSessionUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput> | TestSessionCreateWithoutApplicationInput[] | TestSessionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: TestSessionCreateOrConnectWithoutApplicationInput | TestSessionCreateOrConnectWithoutApplicationInput[]
    upsert?: TestSessionUpsertWithWhereUniqueWithoutApplicationInput | TestSessionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: TestSessionCreateManyApplicationInputEnvelope
    set?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    disconnect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    delete?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    connect?: TestSessionWhereUniqueInput | TestSessionWhereUniqueInput[]
    update?: TestSessionUpdateWithWhereUniqueWithoutApplicationInput | TestSessionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: TestSessionUpdateManyWithWhereWithoutApplicationInput | TestSessionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutTestSessionsInput = {
    create?: XOR<ApplicationCreateWithoutTestSessionsInput, ApplicationUncheckedCreateWithoutTestSessionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutTestSessionsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type QualificationCenterCreateNestedOneWithoutTestSessionsInput = {
    create?: XOR<QualificationCenterCreateWithoutTestSessionsInput, QualificationCenterUncheckedCreateWithoutTestSessionsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutTestSessionsInput
    connect?: QualificationCenterWhereUniqueInput
  }

  export type EnumTestResultFieldUpdateOperationsInput = {
    set?: $Enums.TestResult
  }

  export type ApplicationUpdateOneRequiredWithoutTestSessionsNestedInput = {
    create?: XOR<ApplicationCreateWithoutTestSessionsInput, ApplicationUncheckedCreateWithoutTestSessionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutTestSessionsInput
    upsert?: ApplicationUpsertWithoutTestSessionsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutTestSessionsInput, ApplicationUpdateWithoutTestSessionsInput>, ApplicationUncheckedUpdateWithoutTestSessionsInput>
  }

  export type QualificationCenterUpdateOneRequiredWithoutTestSessionsNestedInput = {
    create?: XOR<QualificationCenterCreateWithoutTestSessionsInput, QualificationCenterUncheckedCreateWithoutTestSessionsInput>
    connectOrCreate?: QualificationCenterCreateOrConnectWithoutTestSessionsInput
    upsert?: QualificationCenterUpsertWithoutTestSessionsInput
    connect?: QualificationCenterWhereUniqueInput
    update?: XOR<XOR<QualificationCenterUpdateToOneWithWhereWithoutTestSessionsInput, QualificationCenterUpdateWithoutTestSessionsInput>, QualificationCenterUncheckedUpdateWithoutTestSessionsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAccreditationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccreditationStatus | EnumAccreditationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccreditationStatusFilter<$PrismaModel> | $Enums.AccreditationStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumAccreditationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccreditationStatus | EnumAccreditationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccreditationStatus[] | ListEnumAccreditationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccreditationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccreditationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccreditationStatusFilter<$PrismaModel>
    _max?: NestedEnumAccreditationStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumTestResultFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | EnumTestResultFieldRefInput<$PrismaModel>
    in?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    not?: NestedEnumTestResultFilter<$PrismaModel> | $Enums.TestResult
  }

  export type NestedEnumTestResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | EnumTestResultFieldRefInput<$PrismaModel>
    in?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestResult[] | ListEnumTestResultFieldRefInput<$PrismaModel>
    not?: NestedEnumTestResultWithAggregatesFilter<$PrismaModel> | $Enums.TestResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestResultFilter<$PrismaModel>
    _max?: NestedEnumTestResultFilter<$PrismaModel>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutApplicationsInput
    preferredQualificationCenter?: QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput
    assignedQualificationCenter?: QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput
    testSessions?: TestSessionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalCreateWithoutUserInput = {
    fullName: string
    certificateNumber: string
    certificateReceivedAt?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutProfessionalsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
  }

  export type ProfessionalCreateOrConnectWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalCreateManyUserInputEnvelope = {
    data: ProfessionalCreateManyUserInput | ProfessionalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccreditationExpertCreateWithoutUserInput = {
    fullName: string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutAccreditationExpertsInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutAccreditationExpertInput
  }

  export type AccreditationExpertUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutAccreditationExpertInput
  }

  export type AccreditationExpertCreateOrConnectWithoutUserInput = {
    where: AccreditationExpertWhereUniqueInput
    create: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput>
  }

  export type AccreditationExpertCreateManyUserInputEnvelope = {
    data: AccreditationExpertCreateManyUserInput | AccreditationExpertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    applicantId?: IntFilter<"Application"> | number
    professionalQualificationId?: IntFilter<"Application"> | number
    preferredQualificationCenterId?: IntNullableFilter<"Application"> | number | null
    qualificationCenterId?: IntNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    comment?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutUserInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfessionalScalarWhereInput = {
    AND?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    OR?: ProfessionalScalarWhereInput[]
    NOT?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    id?: IntFilter<"Professional"> | number
    fullName?: StringFilter<"Professional"> | string
    qualificationCenterId?: IntFilter<"Professional"> | number
    professionalQualificationId?: IntFilter<"Professional"> | number
    certificateNumber?: StringFilter<"Professional"> | string
    certificateReceivedAt?: DateTimeFilter<"Professional"> | Date | string
    userId?: IntNullableFilter<"Professional"> | number | null
  }

  export type AccreditationExpertUpsertWithWhereUniqueWithoutUserInput = {
    where: AccreditationExpertWhereUniqueInput
    update: XOR<AccreditationExpertUpdateWithoutUserInput, AccreditationExpertUncheckedUpdateWithoutUserInput>
    create: XOR<AccreditationExpertCreateWithoutUserInput, AccreditationExpertUncheckedCreateWithoutUserInput>
  }

  export type AccreditationExpertUpdateWithWhereUniqueWithoutUserInput = {
    where: AccreditationExpertWhereUniqueInput
    data: XOR<AccreditationExpertUpdateWithoutUserInput, AccreditationExpertUncheckedUpdateWithoutUserInput>
  }

  export type AccreditationExpertUpdateManyWithWhereWithoutUserInput = {
    where: AccreditationExpertScalarWhereInput
    data: XOR<AccreditationExpertUpdateManyMutationInput, AccreditationExpertUncheckedUpdateManyWithoutUserInput>
  }

  export type AccreditationExpertScalarWhereInput = {
    AND?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
    OR?: AccreditationExpertScalarWhereInput[]
    NOT?: AccreditationExpertScalarWhereInput | AccreditationExpertScalarWhereInput[]
    id?: IntFilter<"AccreditationExpert"> | number
    fullName?: StringFilter<"AccreditationExpert"> | string
    professionalQualificationId?: IntFilter<"AccreditationExpert"> | number
    userId?: IntNullableFilter<"AccreditationExpert"> | number | null
  }

  export type ProfessionCreateWithoutQualificationStandardDeveloperInput = {
    name: string
    code: string
    approvalDate?: Date | string
    professionalQualifications?: ProfessionalQualificationCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput = {
    id?: number
    name: string
    code: string
    approvalDate?: Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionCreateOrConnectWithoutQualificationStandardDeveloperInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput>
  }

  export type ProfessionCreateManyQualificationStandardDeveloperInputEnvelope = {
    data: ProfessionCreateManyQualificationStandardDeveloperInput | ProfessionCreateManyQualificationStandardDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionUpsertWithWhereUniqueWithoutQualificationStandardDeveloperInput = {
    where: ProfessionWhereUniqueInput
    update: XOR<ProfessionUpdateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedUpdateWithoutQualificationStandardDeveloperInput>
    create: XOR<ProfessionCreateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedCreateWithoutQualificationStandardDeveloperInput>
  }

  export type ProfessionUpdateWithWhereUniqueWithoutQualificationStandardDeveloperInput = {
    where: ProfessionWhereUniqueInput
    data: XOR<ProfessionUpdateWithoutQualificationStandardDeveloperInput, ProfessionUncheckedUpdateWithoutQualificationStandardDeveloperInput>
  }

  export type ProfessionUpdateManyWithWhereWithoutQualificationStandardDeveloperInput = {
    where: ProfessionScalarWhereInput
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyWithoutQualificationStandardDeveloperInput>
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

  export type QualificationStandardDeveloperCreateWithoutProfessionsInput = {
    name: string
    edrpou: string
  }

  export type QualificationStandardDeveloperUncheckedCreateWithoutProfessionsInput = {
    id?: number
    name: string
    edrpou: string
  }

  export type QualificationStandardDeveloperCreateOrConnectWithoutProfessionsInput = {
    where: QualificationStandardDeveloperWhereUniqueInput
    create: XOR<QualificationStandardDeveloperCreateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedCreateWithoutProfessionsInput>
  }

  export type ProfessionalQualificationCreateWithoutProfessionInput = {
    name: string
    nqrLevel: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutProfessionInput = {
    id?: number
    name: string
    nqrLevel: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutProfessionInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutProfessionInput, ProfessionalQualificationUncheckedCreateWithoutProfessionInput>
  }

  export type ProfessionalQualificationCreateManyProfessionInputEnvelope = {
    data: ProfessionalQualificationCreateManyProfessionInput | ProfessionalQualificationCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type QualificationStandardDeveloperUpsertWithoutProfessionsInput = {
    update: XOR<QualificationStandardDeveloperUpdateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedUpdateWithoutProfessionsInput>
    create: XOR<QualificationStandardDeveloperCreateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedCreateWithoutProfessionsInput>
    where?: QualificationStandardDeveloperWhereInput
  }

  export type QualificationStandardDeveloperUpdateToOneWithWhereWithoutProfessionsInput = {
    where?: QualificationStandardDeveloperWhereInput
    data: XOR<QualificationStandardDeveloperUpdateWithoutProfessionsInput, QualificationStandardDeveloperUncheckedUpdateWithoutProfessionsInput>
  }

  export type QualificationStandardDeveloperUpdateWithoutProfessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationStandardDeveloperUncheckedUpdateWithoutProfessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
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
    nqrLevel?: IntFilter<"ProfessionalQualification"> | number
    professionId?: IntFilter<"ProfessionalQualification"> | number
  }

  export type ProfessionCreateWithoutProfessionalQualificationsInput = {
    name: string
    code: string
    approvalDate?: Date | string
    qualificationStandardDeveloper: QualificationStandardDeveloperCreateNestedOneWithoutProfessionsInput
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

  export type QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput = {
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
    qualificationCenter: QualificationCenterCreateNestedOneWithoutQualificationCenterAccreditationsInput
  }

  export type QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationCreateOrConnectWithoutProfessionalQualificationInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    create: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterAccreditationCreateManyProfessionalQualificationInputEnvelope = {
    data: QualificationCenterAccreditationCreateManyProfessionalQualificationInput | QualificationCenterAccreditationCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalCreateWithoutProfessionalQualificationInput = {
    fullName: string
    certificateNumber: string
    certificateReceivedAt?: Date | string
    qualificationCenter: QualificationCenterCreateNestedOneWithoutProfessionalsInput
    user?: UserCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type ProfessionalCreateOrConnectWithoutProfessionalQualificationInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ProfessionalCreateManyProfessionalQualificationInputEnvelope = {
    data: ProfessionalCreateManyProfessionalQualificationInput | ProfessionalCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type AccreditationExpertCreateWithoutProfessionalQualificationInput = {
    fullName: string
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutAccreditationExpertInput
    user?: UserCreateNestedOneWithoutAccreditationExpertsInput
  }

  export type AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    fullName: string
    userId?: number | null
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutAccreditationExpertInput
  }

  export type AccreditationExpertCreateOrConnectWithoutProfessionalQualificationInput = {
    where: AccreditationExpertWhereUniqueInput
    create: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type AccreditationExpertCreateManyProfessionalQualificationInputEnvelope = {
    data: AccreditationExpertCreateManyProfessionalQualificationInput | AccreditationExpertCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput = {
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
    qualificationCenter: QualificationCenterCreateNestedOneWithoutQualificationCenterExpertisesInput
    accreditationExpert: AccreditationExpertCreateNestedOneWithoutQualificationCenterExpertisesInput
  }

  export type QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseCreateOrConnectWithoutProfessionalQualificationInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    create: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterExpertiseCreateManyProfessionalQualificationInputEnvelope = {
    data: QualificationCenterExpertiseCreateManyProfessionalQualificationInput | QualificationCenterExpertiseCreateManyProfessionalQualificationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutProfessionalQualificationInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    preferredQualificationCenter?: QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput
    assignedQualificationCenter?: QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput
    testSessions?: TestSessionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutProfessionalQualificationInput = {
    id?: number
    applicantId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutProfessionalQualificationInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ApplicationCreateManyProfessionalQualificationInputEnvelope = {
    data: ApplicationCreateManyProfessionalQualificationInput | ApplicationCreateManyProfessionalQualificationInput[]
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
    qualificationStandardDeveloper?: QualificationStandardDeveloperUpdateOneRequiredWithoutProfessionsNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutProfessionalQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    developerId?: IntFieldUpdateOperationsInput | number
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualificationCenterAccreditationUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    update: XOR<QualificationCenterAccreditationUpdateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<QualificationCenterAccreditationCreateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterAccreditationUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    data: XOR<QualificationCenterAccreditationUpdateWithoutProfessionalQualificationInput, QualificationCenterAccreditationUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterAccreditationUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: QualificationCenterAccreditationScalarWhereInput
    data: XOR<QualificationCenterAccreditationUpdateManyMutationInput, QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterAccreditationScalarWhereInput = {
    AND?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
    OR?: QualificationCenterAccreditationScalarWhereInput[]
    NOT?: QualificationCenterAccreditationScalarWhereInput | QualificationCenterAccreditationScalarWhereInput[]
    id?: IntFilter<"QualificationCenterAccreditation"> | number
    professionalQualificationId?: IntFilter<"QualificationCenterAccreditation"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterAccreditation"> | number
    accreditationDocumentId?: StringFilter<"QualificationCenterAccreditation"> | string
    naqCommissionDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    startDate?: DateTimeFilter<"QualificationCenterAccreditation"> | Date | string
    endDate?: DateTimeNullableFilter<"QualificationCenterAccreditation"> | Date | string | null
    status?: EnumAccreditationStatusFilter<"QualificationCenterAccreditation"> | $Enums.AccreditationStatus
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutProfessionalQualificationInput, ProfessionalUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<ProfessionalCreateWithoutProfessionalQualificationInput, ProfessionalUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutProfessionalQualificationInput, ProfessionalUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type AccreditationExpertUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: AccreditationExpertWhereUniqueInput
    update: XOR<AccreditationExpertUpdateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<AccreditationExpertCreateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type AccreditationExpertUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: AccreditationExpertWhereUniqueInput
    data: XOR<AccreditationExpertUpdateWithoutProfessionalQualificationInput, AccreditationExpertUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type AccreditationExpertUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: AccreditationExpertScalarWhereInput
    data: XOR<AccreditationExpertUpdateManyMutationInput, AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterExpertiseUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    update: XOR<QualificationCenterExpertiseUpdateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<QualificationCenterExpertiseCreateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterExpertiseUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    data: XOR<QualificationCenterExpertiseUpdateWithoutProfessionalQualificationInput, QualificationCenterExpertiseUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterExpertiseUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: QualificationCenterExpertiseScalarWhereInput
    data: XOR<QualificationCenterExpertiseUpdateManyMutationInput, QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterExpertiseScalarWhereInput = {
    AND?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
    OR?: QualificationCenterExpertiseScalarWhereInput[]
    NOT?: QualificationCenterExpertiseScalarWhereInput | QualificationCenterExpertiseScalarWhereInput[]
    id?: IntFilter<"QualificationCenterExpertise"> | number
    professionalQualificationId?: IntFilter<"QualificationCenterExpertise"> | number
    qualificationCenterId?: IntFilter<"QualificationCenterExpertise"> | number
    accreditationExpertId?: IntFilter<"QualificationCenterExpertise"> | number
    expertiseDate?: DateTimeFilter<"QualificationCenterExpertise"> | Date | string
    result?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
    notes?: StringNullableFilter<"QualificationCenterExpertise"> | string | null
  }

  export type ApplicationUpsertWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutProfessionalQualificationInput, ApplicationUncheckedUpdateWithoutProfessionalQualificationInput>
    create: XOR<ApplicationCreateWithoutProfessionalQualificationInput, ApplicationUncheckedCreateWithoutProfessionalQualificationInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutProfessionalQualificationInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutProfessionalQualificationInput, ApplicationUncheckedUpdateWithoutProfessionalQualificationInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutProfessionalQualificationInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutProfessionalQualificationInput>
  }

  export type QualificationCenterAccreditationCreateWithoutQualificationCenterInput = {
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutQualificationCenterAccreditationsInput
  }

  export type QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationCreateOrConnectWithoutQualificationCenterInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    create: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type QualificationCenterAccreditationCreateManyQualificationCenterInputEnvelope = {
    data: QualificationCenterAccreditationCreateManyQualificationCenterInput | QualificationCenterAccreditationCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalCreateWithoutQualificationCenterInput = {
    fullName: string
    certificateNumber: string
    certificateReceivedAt?: Date | string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutProfessionalsInput
    user?: UserCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type ProfessionalCreateOrConnectWithoutQualificationCenterInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput>
  }

  export type ProfessionalCreateManyQualificationCenterInputEnvelope = {
    data: ProfessionalCreateManyQualificationCenterInput | ProfessionalCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type QualificationCenterExpertiseCreateWithoutQualificationCenterInput = {
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutQualificationCenterExpertisesInput
    accreditationExpert: AccreditationExpertCreateNestedOneWithoutQualificationCenterExpertisesInput
  }

  export type QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseCreateOrConnectWithoutQualificationCenterInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    create: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput>
  }

  export type QualificationCenterExpertiseCreateManyQualificationCenterInputEnvelope = {
    data: QualificationCenterExpertiseCreateManyQualificationCenterInput | QualificationCenterExpertiseCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutPreferredQualificationCenterInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutApplicationsInput
    assignedQualificationCenter?: QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput
    testSessions?: TestSessionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutPreferredQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput>
  }

  export type ApplicationCreateManyPreferredQualificationCenterInputEnvelope = {
    data: ApplicationCreateManyPreferredQualificationCenterInput | ApplicationCreateManyPreferredQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutAssignedQualificationCenterInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutApplicationsInput
    preferredQualificationCenter?: QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput
    testSessions?: TestSessionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutAssignedQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput>
  }

  export type ApplicationCreateManyAssignedQualificationCenterInputEnvelope = {
    data: ApplicationCreateManyAssignedQualificationCenterInput | ApplicationCreateManyAssignedQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type TestSessionCreateWithoutQualificationCenterInput = {
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
    application: ApplicationCreateNestedOneWithoutTestSessionsInput
  }

  export type TestSessionUncheckedCreateWithoutQualificationCenterInput = {
    id?: number
    applicationId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type TestSessionCreateOrConnectWithoutQualificationCenterInput = {
    where: TestSessionWhereUniqueInput
    create: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput>
  }

  export type TestSessionCreateManyQualificationCenterInputEnvelope = {
    data: TestSessionCreateManyQualificationCenterInput | TestSessionCreateManyQualificationCenterInput[]
    skipDuplicates?: boolean
  }

  export type QualificationCenterAccreditationUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    update: XOR<QualificationCenterAccreditationUpdateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<QualificationCenterAccreditationCreateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedCreateWithoutQualificationCenterInput>
  }

  export type QualificationCenterAccreditationUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: QualificationCenterAccreditationWhereUniqueInput
    data: XOR<QualificationCenterAccreditationUpdateWithoutQualificationCenterInput, QualificationCenterAccreditationUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type QualificationCenterAccreditationUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: QualificationCenterAccreditationScalarWhereInput
    data: XOR<QualificationCenterAccreditationUpdateManyMutationInput, QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutQualificationCenterInput, ProfessionalUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<ProfessionalCreateWithoutQualificationCenterInput, ProfessionalUncheckedCreateWithoutQualificationCenterInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutQualificationCenterInput, ProfessionalUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type QualificationCenterExpertiseUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    update: XOR<QualificationCenterExpertiseUpdateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<QualificationCenterExpertiseCreateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedCreateWithoutQualificationCenterInput>
  }

  export type QualificationCenterExpertiseUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    data: XOR<QualificationCenterExpertiseUpdateWithoutQualificationCenterInput, QualificationCenterExpertiseUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type QualificationCenterExpertiseUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: QualificationCenterExpertiseScalarWhereInput
    data: XOR<QualificationCenterExpertiseUpdateManyMutationInput, QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutPreferredQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutPreferredQualificationCenterInput, ApplicationUncheckedUpdateWithoutPreferredQualificationCenterInput>
    create: XOR<ApplicationCreateWithoutPreferredQualificationCenterInput, ApplicationUncheckedCreateWithoutPreferredQualificationCenterInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutPreferredQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutPreferredQualificationCenterInput, ApplicationUncheckedUpdateWithoutPreferredQualificationCenterInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutPreferredQualificationCenterInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutAssignedQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutAssignedQualificationCenterInput, ApplicationUncheckedUpdateWithoutAssignedQualificationCenterInput>
    create: XOR<ApplicationCreateWithoutAssignedQualificationCenterInput, ApplicationUncheckedCreateWithoutAssignedQualificationCenterInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutAssignedQualificationCenterInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutAssignedQualificationCenterInput, ApplicationUncheckedUpdateWithoutAssignedQualificationCenterInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutAssignedQualificationCenterInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterInput>
  }

  export type TestSessionUpsertWithWhereUniqueWithoutQualificationCenterInput = {
    where: TestSessionWhereUniqueInput
    update: XOR<TestSessionUpdateWithoutQualificationCenterInput, TestSessionUncheckedUpdateWithoutQualificationCenterInput>
    create: XOR<TestSessionCreateWithoutQualificationCenterInput, TestSessionUncheckedCreateWithoutQualificationCenterInput>
  }

  export type TestSessionUpdateWithWhereUniqueWithoutQualificationCenterInput = {
    where: TestSessionWhereUniqueInput
    data: XOR<TestSessionUpdateWithoutQualificationCenterInput, TestSessionUncheckedUpdateWithoutQualificationCenterInput>
  }

  export type TestSessionUpdateManyWithWhereWithoutQualificationCenterInput = {
    where: TestSessionScalarWhereInput
    data: XOR<TestSessionUpdateManyMutationInput, TestSessionUncheckedUpdateManyWithoutQualificationCenterInput>
  }

  export type TestSessionScalarWhereInput = {
    AND?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
    OR?: TestSessionScalarWhereInput[]
    NOT?: TestSessionScalarWhereInput | TestSessionScalarWhereInput[]
    id?: IntFilter<"TestSession"> | number
    applicationId?: IntFilter<"TestSession"> | number
    qualificationCenterId?: IntFilter<"TestSession"> | number
    scheduledAt?: DateTimeFilter<"TestSession"> | Date | string
    result?: EnumTestResultFilter<"TestSession"> | $Enums.TestResult
    notes?: StringNullableFilter<"TestSession"> | string | null
  }

  export type ProfessionalQualificationCreateWithoutQualificationCenterAccreditationsInput = {
    name: string
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutQualificationCenterAccreditationsInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutQualificationCenterAccreditationsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterAccreditationsInput>
  }

  export type QualificationCenterCreateWithoutQualificationCenterAccreditationsInput = {
    name: string
    edrpou: string
    address: string
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutQualificationCenterAccreditationsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutQualificationCenterAccreditationsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedCreateWithoutQualificationCenterAccreditationsInput>
  }

  export type ProfessionalQualificationUpsertWithoutQualificationCenterAccreditationsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
    create: XOR<ProfessionalQualificationCreateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutQualificationCenterAccreditationsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutQualificationCenterAccreditationsInput, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
  }

  export type ProfessionalQualificationUpdateWithoutQualificationCenterAccreditationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterAccreditationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterUpsertWithoutQualificationCenterAccreditationsInput = {
    update: XOR<QualificationCenterUpdateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
    create: XOR<QualificationCenterCreateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedCreateWithoutQualificationCenterAccreditationsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutQualificationCenterAccreditationsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutQualificationCenterAccreditationsInput, QualificationCenterUncheckedUpdateWithoutQualificationCenterAccreditationsInput>
  }

  export type QualificationCenterUpdateWithoutQualificationCenterAccreditationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutQualificationCenterAccreditationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterCreateWithoutProfessionalsInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutProfessionalsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutProfessionalsInput, QualificationCenterUncheckedCreateWithoutProfessionalsInput>
  }

  export type ProfessionalQualificationCreateWithoutProfessionalsInput = {
    name: string
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutProfessionalsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutProfessionalsInput, ProfessionalQualificationUncheckedCreateWithoutProfessionalsInput>
  }

  export type UserCreateWithoutProfessionalsInput = {
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
  }

  export type QualificationCenterUpsertWithoutProfessionalsInput = {
    update: XOR<QualificationCenterUpdateWithoutProfessionalsInput, QualificationCenterUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<QualificationCenterCreateWithoutProfessionalsInput, QualificationCenterUncheckedCreateWithoutProfessionalsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutProfessionalsInput, QualificationCenterUncheckedUpdateWithoutProfessionalsInput>
  }

  export type QualificationCenterUpdateWithoutProfessionalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type ProfessionalQualificationUpsertWithoutProfessionalsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutProfessionalsInput, ProfessionalQualificationUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<ProfessionalQualificationCreateWithoutProfessionalsInput, ProfessionalQualificationUncheckedCreateWithoutProfessionalsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutProfessionalsInput, ProfessionalQualificationUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ProfessionalQualificationUpdateWithoutProfessionalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type UserUpsertWithoutProfessionalsInput = {
    update: XOR<UserUpdateWithoutProfessionalsInput, UserUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<UserCreateWithoutProfessionalsInput, UserUncheckedCreateWithoutProfessionalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalsInput, UserUncheckedUpdateWithoutProfessionalsInput>
  }

  export type UserUpdateWithoutProfessionalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfessionalQualificationCreateWithoutAccreditationExpertsInput = {
    name: string
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutAccreditationExpertsInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutAccreditationExpertsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationExpertsInput>
  }

  export type QualificationCenterExpertiseCreateWithoutAccreditationExpertInput = {
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutQualificationCenterExpertisesInput
    qualificationCenter: QualificationCenterCreateNestedOneWithoutQualificationCenterExpertisesInput
  }

  export type QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseCreateOrConnectWithoutAccreditationExpertInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    create: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput>
  }

  export type QualificationCenterExpertiseCreateManyAccreditationExpertInputEnvelope = {
    data: QualificationCenterExpertiseCreateManyAccreditationExpertInput | QualificationCenterExpertiseCreateManyAccreditationExpertInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAccreditationExpertsInput = {
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccreditationExpertsInput = {
    id?: number
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccreditationExpertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccreditationExpertsInput, UserUncheckedCreateWithoutAccreditationExpertsInput>
  }

  export type ProfessionalQualificationUpsertWithoutAccreditationExpertsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedUpdateWithoutAccreditationExpertsInput>
    create: XOR<ProfessionalQualificationCreateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedCreateWithoutAccreditationExpertsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutAccreditationExpertsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutAccreditationExpertsInput, ProfessionalQualificationUncheckedUpdateWithoutAccreditationExpertsInput>
  }

  export type ProfessionalQualificationUpdateWithoutAccreditationExpertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutAccreditationExpertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterExpertiseUpsertWithWhereUniqueWithoutAccreditationExpertInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    update: XOR<QualificationCenterExpertiseUpdateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedUpdateWithoutAccreditationExpertInput>
    create: XOR<QualificationCenterExpertiseCreateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedCreateWithoutAccreditationExpertInput>
  }

  export type QualificationCenterExpertiseUpdateWithWhereUniqueWithoutAccreditationExpertInput = {
    where: QualificationCenterExpertiseWhereUniqueInput
    data: XOR<QualificationCenterExpertiseUpdateWithoutAccreditationExpertInput, QualificationCenterExpertiseUncheckedUpdateWithoutAccreditationExpertInput>
  }

  export type QualificationCenterExpertiseUpdateManyWithWhereWithoutAccreditationExpertInput = {
    where: QualificationCenterExpertiseScalarWhereInput
    data: XOR<QualificationCenterExpertiseUpdateManyMutationInput, QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertInput>
  }

  export type UserUpsertWithoutAccreditationExpertsInput = {
    update: XOR<UserUpdateWithoutAccreditationExpertsInput, UserUncheckedUpdateWithoutAccreditationExpertsInput>
    create: XOR<UserCreateWithoutAccreditationExpertsInput, UserUncheckedCreateWithoutAccreditationExpertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccreditationExpertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccreditationExpertsInput, UserUncheckedUpdateWithoutAccreditationExpertsInput>
  }

  export type UserUpdateWithoutAccreditationExpertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccreditationExpertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfessionalQualificationCreateWithoutQualificationCenterExpertisesInput = {
    name: string
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutQualificationCenterExpertisesInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutQualificationCenterExpertisesInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterExpertisesInput>
  }

  export type QualificationCenterCreateWithoutQualificationCenterExpertisesInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutQualificationCenterExpertisesInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutQualificationCenterExpertisesInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedCreateWithoutQualificationCenterExpertisesInput>
  }

  export type AccreditationExpertCreateWithoutQualificationCenterExpertisesInput = {
    fullName: string
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutAccreditationExpertsInput
    user?: UserCreateNestedOneWithoutAccreditationExpertsInput
  }

  export type AccreditationExpertUncheckedCreateWithoutQualificationCenterExpertisesInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    userId?: number | null
  }

  export type AccreditationExpertCreateOrConnectWithoutQualificationCenterExpertisesInput = {
    where: AccreditationExpertWhereUniqueInput
    create: XOR<AccreditationExpertCreateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedCreateWithoutQualificationCenterExpertisesInput>
  }

  export type ProfessionalQualificationUpsertWithoutQualificationCenterExpertisesInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterExpertisesInput>
    create: XOR<ProfessionalQualificationCreateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedCreateWithoutQualificationCenterExpertisesInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutQualificationCenterExpertisesInput, ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type ProfessionalQualificationUpdateWithoutQualificationCenterExpertisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutQualificationCenterExpertisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterUpsertWithoutQualificationCenterExpertisesInput = {
    update: XOR<QualificationCenterUpdateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedUpdateWithoutQualificationCenterExpertisesInput>
    create: XOR<QualificationCenterCreateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedCreateWithoutQualificationCenterExpertisesInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutQualificationCenterExpertisesInput, QualificationCenterUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type QualificationCenterUpdateWithoutQualificationCenterExpertisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutQualificationCenterExpertisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type AccreditationExpertUpsertWithoutQualificationCenterExpertisesInput = {
    update: XOR<AccreditationExpertUpdateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedUpdateWithoutQualificationCenterExpertisesInput>
    create: XOR<AccreditationExpertCreateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedCreateWithoutQualificationCenterExpertisesInput>
    where?: AccreditationExpertWhereInput
  }

  export type AccreditationExpertUpdateToOneWithWhereWithoutQualificationCenterExpertisesInput = {
    where?: AccreditationExpertWhereInput
    data: XOR<AccreditationExpertUpdateWithoutQualificationCenterExpertisesInput, AccreditationExpertUncheckedUpdateWithoutQualificationCenterExpertisesInput>
  }

  export type AccreditationExpertUpdateWithoutQualificationCenterExpertisesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutAccreditationExpertsNestedInput
    user?: UserUpdateOneWithoutAccreditationExpertsNestedInput
  }

  export type AccreditationExpertUncheckedUpdateWithoutQualificationCenterExpertisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateWithoutApplicationsInput = {
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalCreateNestedManyWithoutUserInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: number
    email: string
    passwordHash: string
    role?: $Enums.Role
    canApplyForQualification?: boolean
    canDevelopStandards?: boolean
    canAccreditCenters?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutUserInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type ProfessionalQualificationCreateWithoutApplicationsInput = {
    name: string
    nqrLevel: number
    profession: ProfessionCreateNestedOneWithoutProfessionalQualificationsInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    nqrLevel: number
    professionId: number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    accreditationExperts?: AccreditationExpertUncheckedCreateNestedManyWithoutProfessionalQualificationInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutProfessionalQualificationInput
  }

  export type ProfessionalQualificationCreateOrConnectWithoutApplicationsInput = {
    where: ProfessionalQualificationWhereUniqueInput
    create: XOR<ProfessionalQualificationCreateWithoutApplicationsInput, ProfessionalQualificationUncheckedCreateWithoutApplicationsInput>
  }

  export type QualificationCenterCreateWithoutPreferredApplicationsInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutPreferredApplicationsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutPreferredApplicationsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutPreferredApplicationsInput, QualificationCenterUncheckedCreateWithoutPreferredApplicationsInput>
  }

  export type QualificationCenterCreateWithoutAssignedApplicationsInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    testSessions?: TestSessionCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutAssignedApplicationsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    testSessions?: TestSessionUncheckedCreateNestedManyWithoutQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutAssignedApplicationsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutAssignedApplicationsInput, QualificationCenterUncheckedCreateWithoutAssignedApplicationsInput>
  }

  export type TestSessionCreateWithoutApplicationInput = {
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
    qualificationCenter: QualificationCenterCreateNestedOneWithoutTestSessionsInput
  }

  export type TestSessionUncheckedCreateWithoutApplicationInput = {
    id?: number
    qualificationCenterId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type TestSessionCreateOrConnectWithoutApplicationInput = {
    where: TestSessionWhereUniqueInput
    create: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput>
  }

  export type TestSessionCreateManyApplicationInputEnvelope = {
    data: TestSessionCreateManyApplicationInput | TestSessionCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalUpdateManyWithoutUserNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    canApplyForQualification?: BoolFieldUpdateOperationsInput | boolean
    canDevelopStandards?: BoolFieldUpdateOperationsInput | boolean
    canAccreditCenters?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalUncheckedUpdateManyWithoutUserNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfessionalQualificationUpsertWithoutApplicationsInput = {
    update: XOR<ProfessionalQualificationUpdateWithoutApplicationsInput, ProfessionalQualificationUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ProfessionalQualificationCreateWithoutApplicationsInput, ProfessionalQualificationUncheckedCreateWithoutApplicationsInput>
    where?: ProfessionalQualificationWhereInput
  }

  export type ProfessionalQualificationUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ProfessionalQualificationWhereInput
    data: XOR<ProfessionalQualificationUpdateWithoutApplicationsInput, ProfessionalQualificationUncheckedUpdateWithoutApplicationsInput>
  }

  export type ProfessionalQualificationUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    profession?: ProfessionUpdateOneRequiredWithoutProfessionalQualificationsNestedInput
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    professionId?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type QualificationCenterUpsertWithoutPreferredApplicationsInput = {
    update: XOR<QualificationCenterUpdateWithoutPreferredApplicationsInput, QualificationCenterUncheckedUpdateWithoutPreferredApplicationsInput>
    create: XOR<QualificationCenterCreateWithoutPreferredApplicationsInput, QualificationCenterUncheckedCreateWithoutPreferredApplicationsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutPreferredApplicationsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutPreferredApplicationsInput, QualificationCenterUncheckedUpdateWithoutPreferredApplicationsInput>
  }

  export type QualificationCenterUpdateWithoutPreferredApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutPreferredApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUpsertWithoutAssignedApplicationsInput = {
    update: XOR<QualificationCenterUpdateWithoutAssignedApplicationsInput, QualificationCenterUncheckedUpdateWithoutAssignedApplicationsInput>
    create: XOR<QualificationCenterCreateWithoutAssignedApplicationsInput, QualificationCenterUncheckedCreateWithoutAssignedApplicationsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutAssignedApplicationsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutAssignedApplicationsInput, QualificationCenterUncheckedUpdateWithoutAssignedApplicationsInput>
  }

  export type QualificationCenterUpdateWithoutAssignedApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    testSessions?: TestSessionUpdateManyWithoutQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutAssignedApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    testSessions?: TestSessionUncheckedUpdateManyWithoutQualificationCenterNestedInput
  }

  export type TestSessionUpsertWithWhereUniqueWithoutApplicationInput = {
    where: TestSessionWhereUniqueInput
    update: XOR<TestSessionUpdateWithoutApplicationInput, TestSessionUncheckedUpdateWithoutApplicationInput>
    create: XOR<TestSessionCreateWithoutApplicationInput, TestSessionUncheckedCreateWithoutApplicationInput>
  }

  export type TestSessionUpdateWithWhereUniqueWithoutApplicationInput = {
    where: TestSessionWhereUniqueInput
    data: XOR<TestSessionUpdateWithoutApplicationInput, TestSessionUncheckedUpdateWithoutApplicationInput>
  }

  export type TestSessionUpdateManyWithWhereWithoutApplicationInput = {
    where: TestSessionScalarWhereInput
    data: XOR<TestSessionUpdateManyMutationInput, TestSessionUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationCreateWithoutTestSessionsInput = {
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
    professionalQualification: ProfessionalQualificationCreateNestedOneWithoutApplicationsInput
    preferredQualificationCenter?: QualificationCenterCreateNestedOneWithoutPreferredApplicationsInput
    assignedQualificationCenter?: QualificationCenterCreateNestedOneWithoutAssignedApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutTestSessionsInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutTestSessionsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutTestSessionsInput, ApplicationUncheckedCreateWithoutTestSessionsInput>
  }

  export type QualificationCenterCreateWithoutTestSessionsInput = {
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationCreateNestedManyWithoutAssignedQualificationCenterInput
  }

  export type QualificationCenterUncheckedCreateWithoutTestSessionsInput = {
    id?: number
    name: string
    edrpou: string
    address: string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedCreateNestedManyWithoutQualificationCenterInput
    professionals?: ProfessionalUncheckedCreateNestedManyWithoutQualificationCenterInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedCreateNestedManyWithoutQualificationCenterInput
    preferredApplications?: ApplicationUncheckedCreateNestedManyWithoutPreferredQualificationCenterInput
    assignedApplications?: ApplicationUncheckedCreateNestedManyWithoutAssignedQualificationCenterInput
  }

  export type QualificationCenterCreateOrConnectWithoutTestSessionsInput = {
    where: QualificationCenterWhereUniqueInput
    create: XOR<QualificationCenterCreateWithoutTestSessionsInput, QualificationCenterUncheckedCreateWithoutTestSessionsInput>
  }

  export type ApplicationUpsertWithoutTestSessionsInput = {
    update: XOR<ApplicationUpdateWithoutTestSessionsInput, ApplicationUncheckedUpdateWithoutTestSessionsInput>
    create: XOR<ApplicationCreateWithoutTestSessionsInput, ApplicationUncheckedCreateWithoutTestSessionsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutTestSessionsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutTestSessionsInput, ApplicationUncheckedUpdateWithoutTestSessionsInput>
  }

  export type ApplicationUpdateWithoutTestSessionsInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput
    preferredQualificationCenter?: QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput
    assignedQualificationCenter?: QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutTestSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualificationCenterUpsertWithoutTestSessionsInput = {
    update: XOR<QualificationCenterUpdateWithoutTestSessionsInput, QualificationCenterUncheckedUpdateWithoutTestSessionsInput>
    create: XOR<QualificationCenterCreateWithoutTestSessionsInput, QualificationCenterUncheckedCreateWithoutTestSessionsInput>
    where?: QualificationCenterWhereInput
  }

  export type QualificationCenterUpdateToOneWithWhereWithoutTestSessionsInput = {
    where?: QualificationCenterWhereInput
    data: XOR<QualificationCenterUpdateWithoutTestSessionsInput, QualificationCenterUncheckedUpdateWithoutTestSessionsInput>
  }

  export type QualificationCenterUpdateWithoutTestSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUpdateManyWithoutAssignedQualificationCenterNestedInput
  }

  export type QualificationCenterUncheckedUpdateWithoutTestSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    edrpou?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutQualificationCenterNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterNestedInput
    preferredApplications?: ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterNestedInput
    assignedApplications?: ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterNestedInput
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalCreateManyUserInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
  }

  export type AccreditationExpertCreateManyUserInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput
    preferredQualificationCenter?: QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput
    assignedQualificationCenter?: QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput
    testSessions?: TestSessionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testSessions?: TestSessionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutProfessionalsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutProfessionalsNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccreditationExpertUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutAccreditationExpertsNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutAccreditationExpertNestedInput
  }

  export type AccreditationExpertUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertNestedInput
  }

  export type AccreditationExpertUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionCreateManyQualificationStandardDeveloperInput = {
    id?: number
    name: string
    code: string
    approvalDate?: Date | string
  }

  export type ProfessionUpdateWithoutQualificationStandardDeveloperInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualifications?: ProfessionalQualificationUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateWithoutQualificationStandardDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualifications?: ProfessionalQualificationUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateManyWithoutQualificationStandardDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    approvalDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalQualificationCreateManyProfessionInput = {
    id?: number
    name: string
    nqrLevel: number
  }

  export type ProfessionalQualificationUpdateWithoutProfessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateWithoutProfessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
    qualificationCenterAccreditations?: QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    professionals?: ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    accreditationExperts?: AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutProfessionalQualificationNestedInput
  }

  export type ProfessionalQualificationUncheckedUpdateManyWithoutProfessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nqrLevel?: IntFieldUpdateOperationsInput | number
  }

  export type QualificationCenterAccreditationCreateManyProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type ProfessionalCreateManyProfessionalQualificationInput = {
    id?: number
    fullName: string
    qualificationCenterId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type AccreditationExpertCreateManyProfessionalQualificationInput = {
    id?: number
    fullName: string
    userId?: number | null
  }

  export type QualificationCenterExpertiseCreateManyProfessionalQualificationInput = {
    id?: number
    qualificationCenterId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type ApplicationCreateManyProfessionalQualificationInput = {
    id?: number
    applicantId: number
    preferredQualificationCenterId?: number | null
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QualificationCenterAccreditationUpdateWithoutProfessionalQualificationInput = {
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput
  }

  export type QualificationCenterAccreditationUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type ProfessionalUpdateWithoutProfessionalQualificationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutProfessionalsNestedInput
    user?: UserUpdateOneWithoutProfessionalsNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfessionalUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccreditationExpertUpdateWithoutProfessionalQualificationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    qualificationCenterExpertises?: QualificationCenterExpertiseUpdateManyWithoutAccreditationExpertNestedInput
    user?: UserUpdateOneWithoutAccreditationExpertsNestedInput
  }

  export type AccreditationExpertUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterExpertises?: QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertNestedInput
  }

  export type AccreditationExpertUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QualificationCenterExpertiseUpdateWithoutProfessionalQualificationInput = {
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
    accreditationExpert?: AccreditationExpertUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
  }

  export type QualificationCenterExpertiseUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUpdateWithoutProfessionalQualificationInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    preferredQualificationCenter?: QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput
    assignedQualificationCenter?: QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput
    testSessions?: TestSessionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testSessions?: TestSessionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutProfessionalQualificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualificationCenterAccreditationCreateManyQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    accreditationDocumentId: string
    naqCommissionDate?: Date | string
    startDate?: Date | string
    endDate?: Date | string | null
    status?: $Enums.AccreditationStatus
  }

  export type ProfessionalCreateManyQualificationCenterInput = {
    id?: number
    fullName: string
    professionalQualificationId: number
    certificateNumber: string
    certificateReceivedAt?: Date | string
    userId?: number | null
  }

  export type QualificationCenterExpertiseCreateManyQualificationCenterInput = {
    id?: number
    professionalQualificationId: number
    accreditationExpertId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type ApplicationCreateManyPreferredQualificationCenterInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    qualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyAssignedQualificationCenterInput = {
    id?: number
    applicantId: number
    professionalQualificationId: number
    preferredQualificationCenterId?: number | null
    status?: $Enums.ApplicationStatus
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestSessionCreateManyQualificationCenterInput = {
    id?: number
    applicationId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type QualificationCenterAccreditationUpdateWithoutQualificationCenterInput = {
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterAccreditationsNestedInput
  }

  export type QualificationCenterAccreditationUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type QualificationCenterAccreditationUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    accreditationDocumentId?: StringFieldUpdateOperationsInput | string
    naqCommissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccreditationStatusFieldUpdateOperationsInput | $Enums.AccreditationStatus
  }

  export type ProfessionalUpdateWithoutQualificationCenterInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutProfessionalsNestedInput
    user?: UserUpdateOneWithoutProfessionalsNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfessionalUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    certificateNumber?: StringFieldUpdateOperationsInput | string
    certificateReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QualificationCenterExpertiseUpdateWithoutQualificationCenterInput = {
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
    accreditationExpert?: AccreditationExpertUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
  }

  export type QualificationCenterExpertiseUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    accreditationExpertId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUpdateWithoutPreferredQualificationCenterInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput
    assignedQualificationCenter?: QualificationCenterUpdateOneWithoutAssignedApplicationsNestedInput
    testSessions?: TestSessionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutPreferredQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testSessions?: TestSessionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutPreferredQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutAssignedQualificationCenterInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutApplicationsNestedInput
    preferredQualificationCenter?: QualificationCenterUpdateOneWithoutPreferredApplicationsNestedInput
    testSessions?: TestSessionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAssignedQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testSessions?: TestSessionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutAssignedQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    preferredQualificationCenterId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestSessionUpdateWithoutQualificationCenterInput = {
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutTestSessionsNestedInput
  }

  export type TestSessionUncheckedUpdateWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSessionUncheckedUpdateManyWithoutQualificationCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseCreateManyAccreditationExpertInput = {
    id?: number
    professionalQualificationId: number
    qualificationCenterId: number
    expertiseDate?: Date | string
    result?: string | null
    notes?: string | null
  }

  export type QualificationCenterExpertiseUpdateWithoutAccreditationExpertInput = {
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    professionalQualification?: ProfessionalQualificationUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutQualificationCenterExpertisesNestedInput
  }

  export type QualificationCenterExpertiseUncheckedUpdateWithoutAccreditationExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualificationCenterExpertiseUncheckedUpdateManyWithoutAccreditationExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalQualificationId?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    expertiseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSessionCreateManyApplicationInput = {
    id?: number
    qualificationCenterId: number
    scheduledAt: Date | string
    result?: $Enums.TestResult
    notes?: string | null
  }

  export type TestSessionUpdateWithoutApplicationInput = {
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    qualificationCenter?: QualificationCenterUpdateOneRequiredWithoutTestSessionsNestedInput
  }

  export type TestSessionUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSessionUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    qualificationCenterId?: IntFieldUpdateOperationsInput | number
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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