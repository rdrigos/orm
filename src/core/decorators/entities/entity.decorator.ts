import { METADATA } from '@/core/metadata/metadata.keys';

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

export interface EntityMetadata {
  target: Function;
  name: string;
  comment: string | undefined;
}

export function Entity(options: EntityOptions = {}): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(
      METADATA.ENTITY,
      {
        name: options.name ?? target.name,
        schema: options.schema ?? undefined,
        comment: options.comment ?? undefined,
      },
      target
    );
  };
}
