export interface ColumnOptions {
  /**
   * Column name in the database
   * If omitted, it defaults to the property name in the class
   */
  name?: string;

  /**
   * Column comment. Not supported by all database types
   */
  comment?: string;

  /**
   * Column type. Must be one of the value from the ColumnTypes class
   */
  type?: string;

  /**
   * Indicates if column's value can be set to NULL
   */
  nullable?: boolean;

  /**
   * Specifies if column's value must be unique or not
   */
  unique?: boolean;
}
