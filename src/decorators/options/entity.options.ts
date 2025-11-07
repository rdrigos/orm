export interface EntityOptions {
  /**
   * Database table name
   * If omitted, it defaults to the entity's class name
   */
  name?: string;

  /**
   * Schema name
   * Used in Postgres and Sql Server
   */
  schema?: string;

  /**
   * Table comment.
   * Not supported by all database types
   */
  comment?: string;
}
