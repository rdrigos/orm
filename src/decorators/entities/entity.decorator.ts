import { EntityOptions } from '@/decorators/options/entity.options';
import { METADATA } from '@/metadata/metadata.keys';

export function Entity(options: EntityOptions = {}): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(
      METADATA.ENTITY,
      {
        name: options.name ?? target.name,
        comment: options.comment ?? undefined,
        schema: options.schema ?? undefined,
      },
      target
    );
  };
}
