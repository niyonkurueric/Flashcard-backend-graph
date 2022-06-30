/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['Users']; // Users!
  }
  Cards: { // root type
    answer: string; // String!
    id: number; // Int!
    question: string; // String!
  }
  Mutation: {};
  Query: {};
  Users: { // root type
    email: string; // String!
    id: number; // Int!
    names: string; // String!
    password: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['Users']; // Users!
  }
  Cards: { // field return type
    answer: string; // String!
    id: number; // Int!
    question: string; // String!
  }
  Mutation: { // field return type
    Signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    UpdateCard: NexusGenRootTypes['Cards']; // Cards!
    creatNewCard: NexusGenRootTypes['Cards']; // Cards!
    createNewUser: NexusGenRootTypes['Users']; // Users!
    deleteCard: string; // String!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Query: { // field return type
    getAllCard: NexusGenRootTypes['Cards'][]; // [Cards!]!
    getAllUser: NexusGenRootTypes['Users'][]; // [Users!]!
    getOneCard: NexusGenRootTypes['Cards']; // Cards!
    getOneUser: NexusGenRootTypes['Users']; // Users!
    getOwnCards: Array<NexusGenRootTypes['Cards'] | null>; // [Cards]!
  }
  Users: { // field return type
    cards: NexusGenRootTypes['Cards'][]; // [Cards!]!
    email: string; // String!
    id: number; // Int!
    names: string; // String!
    password: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'Users'
  }
  Cards: { // field return type name
    answer: 'String'
    id: 'Int'
    question: 'String'
  }
  Mutation: { // field return type name
    Signup: 'AuthPayload'
    UpdateCard: 'Cards'
    creatNewCard: 'Cards'
    createNewUser: 'Users'
    deleteCard: 'String'
    login: 'AuthPayload'
  }
  Query: { // field return type name
    getAllCard: 'Cards'
    getAllUser: 'Users'
    getOneCard: 'Cards'
    getOneUser: 'Users'
    getOwnCards: 'Cards'
  }
  Users: { // field return type name
    cards: 'Cards'
    email: 'String'
    id: 'Int'
    names: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    Signup: { // args
      email: string; // String!
      names: string; // String!
      password: string; // String!
    }
    UpdateCard: { // args
      answer?: string | null; // String
      id: number; // Int!
      question?: string | null; // String
    }
    creatNewCard: { // args
      answer: string; // String!
      question: string; // String!
    }
    createNewUser: { // args
      email: string; // String!
      names: string; // String!
      password: string; // String!
    }
    deleteCard: { // args
      id: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
  }
  Query: {
    getAllCard: { // args
      orderBy?: NexusGenEnums['Sort'] | null; // Sort
    }
    getOneCard: { // args
      id: number; // Int!
    }
    getOneUser: { // args
      email: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}