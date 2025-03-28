import { Static, Type } from '@sinclair/typebox';

export const ExampleSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.Optional(Type.String()),
});

export type Example = Static<typeof ExampleSchema>;