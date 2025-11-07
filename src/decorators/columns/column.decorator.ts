import { ColumnOptions } from '@/decorators/options/column.options';
import { METADATA } from '@/metadata/metadata.keys';

export function Column(options: ColumnOptions = {}): PropertyDecorator {
  return (target, key) => {
    Reflect.defineMetadata(
      METADATA.COLUMN,
      {
        name: options.name ?? key.toString(),
        comment: options.comment ?? undefined,
        type: options.type ?? undefined,
        nullable: options.nullable ?? undefined,
        unique: options.unique ?? undefined,
      },
      target
    );
  };
}
