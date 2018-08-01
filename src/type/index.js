/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

export {
  // Predicate
  isSchema,
  // GraphQL Schema definition
  GraphQLSchema,
} from './schema';

export type { GraphQLSchemaConfig } from './schema';

export {
  // Predicates
  isType,
  isLiteralType,
  isScalarType,
  isObjectType,
  isInterfaceType,
  isUnionType,
  isInputUnionType,
  isEnumType,
  isInputObjectType,
  isListType,
  isNonNullType,
  isInputType,
  isOutputType,
  isLeafType,
  isCompositeType,
  isAbstractType,
  isWrappingType,
  isNullableType,
  isNamedType,
  // Assertions
  assertType,
  assertLiteralType,
  assertScalarType,
  assertObjectType,
  assertInterfaceType,
  assertUnionType,
  assertInputUnionType,
  assertEnumType,
  assertInputObjectType,
  assertListType,
  assertNonNullType,
  assertInputType,
  assertOutputType,
  assertLeafType,
  assertCompositeType,
  assertAbstractType,
  assertWrappingType,
  assertNullableType,
  assertNamedType,
  // Un-modifiers
  getNullableType,
  getNamedType,
  // Definitions
  GraphQLLiteralType,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLInputUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  // Type Wrappers
  GraphQLList,
  GraphQLNonNull,
} from './definition';

export {
  // Predicate
  isDirective,
  // Directives Definition
  GraphQLDirective,
  // Built-in Directives defined by the Spec
  isSpecifiedDirective,
  specifiedDirectives,
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,
  // Constant Deprecation Reason
  DEFAULT_DEPRECATION_REASON,
} from './directives';

export type { GraphQLDirectiveConfig } from './directives';

// Common built-in scalar instances.
export {
  isSpecifiedScalarType,
  specifiedScalarTypes,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
} from './scalars';

export {
  // "Enum" of Type Kinds
  TypeKind,
  // GraphQL Types for introspection.
  isIntrospectionType,
  introspectionTypes,
  __Schema,
  __Directive,
  __DirectiveLocation,
  __Type,
  __Field,
  __InputValue,
  __EnumValue,
  __TypeKind,
  // Meta-field definitions.
  SchemaMetaFieldDef,
  TypeMetaFieldDef,
  TypeNameMetaFieldDef,
} from './introspection';

export type {
  GraphQLType,
  GraphQLInputType,
  GraphQLOutputType,
  GraphQLLeafType,
  GraphQLCompositeType,
  GraphQLAbstractType,
  GraphQLWrappingType,
  GraphQLNullableType,
  GraphQLNamedType,
  Thunk,
  GraphQLArgument,
  GraphQLArgumentConfig,
  GraphQLEnumTypeConfig,
  GraphQLEnumValue,
  GraphQLEnumValueConfig,
  GraphQLEnumValueConfigMap,
  GraphQLField,
  GraphQLFieldConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldConfigMap,
  GraphQLFieldMap,
  GraphQLFieldResolver,
  GraphQLInputField,
  GraphQLInputFieldConfig,
  GraphQLInputFieldConfigMap,
  GraphQLInputFieldMap,
  GraphQLInputObjectTypeConfig,
  GraphQLInterfaceTypeConfig,
  GraphQLIsTypeOfFn,
  GraphQLObjectTypeConfig,
  GraphQLResolveInfo,
  ResponsePath,
  GraphQLLiteralTypeConfig,
  GraphQLScalarTypeConfig,
  GraphQLTypeResolver,
  GraphQLUnionTypeConfig,
  GraphQLInputUnionTypeConfig,
  GraphQLScalarSerializer,
  GraphQLScalarValueParser,
  GraphQLScalarLiteralParser,
} from './definition';

export { validateSchema, assertValidSchema } from './validate';
