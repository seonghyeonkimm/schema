/**
 * This file was automatically generated by Nexus 0.7.0-alpha.2
 * Do not make changes to this file directly
 */

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenRootTypes {
  Bar: NexusGenRootTypes["Foo"] | NexusGenRootTypes["TestObj"];
  Baz: any;
  Boolean: boolean;
  Float: number;
  Foo: {
    // root type
    name: string; // String!
    ok: boolean; // Boolean!
  };
  ID: string;
  Int: number;
  Query: {};
  String: string;
  TestObj: {
    // root type
    item: string; // String!
    ok: boolean; // Boolean!
  };
}

export interface NexusGenFieldTypes {
  Bar: {
    // field return type
    ok: boolean; // Boolean!
  };
  Baz: {
    // field return type
    a: NexusGenRootTypes["Bar"]; // Bar!
    ok: boolean; // Boolean!
  };
  Foo: {
    // field return type
    name: string; // String!
    ok: boolean; // Boolean!
  };
  Query: {
    // field return type
    bar: NexusGenRootTypes["Bar"]; // Bar!
  };
  TestObj: {
    // field return type
    item: string; // String!
    ok: boolean; // Boolean!
  };
}

export interface NexusGenArgTypes {}

export interface NexusGenAbstractResolveReturnTypes {
  Bar: "Foo" | "TestObj";
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Foo" | "Query" | "TestObj";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Bar" | "Baz";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["enumNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

export type Gen = NexusGenTypes;
