import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ApplyToProjectData {
  projectApplication_insert: ProjectApplication_Key;
}

export interface ApplyToProjectVariables {
  developerId: UUIDString;
  projectId: UUIDString;
  coverLetterUrl?: string | null;
  proposalText: string;
  proposedRate: number;
}

export interface CreateSkillData {
  skill_insert: Skill_Key;
}

export interface CreateSkillVariables {
  category: string;
  description?: string | null;
  name: string;
}

export interface DeveloperProfile_Key {
  id: UUIDString;
  __typename?: 'DeveloperProfile_Key';
}

export interface GetDeveloperProfileData {
  developerProfile?: {
    id: UUIDString;
    userId: UUIDString;
    availability?: boolean | null;
    hourlyRate?: number | null;
    portfolioUrl?: string | null;
    primaryRole: string;
    yearsOfExperience: number;
  } & DeveloperProfile_Key;
}

export interface ListProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    budget: number;
    deadline?: TimestampString | null;
    status: string;
  } & Project_Key)[];
}

export interface ProjectApplication_Key {
  id: UUIDString;
  __typename?: 'ProjectApplication_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UserSkill_Key {
  userId: UUIDString;
  skillId: UUIDString;
  __typename?: 'UserSkill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;
export function createSkill(dc: DataConnect, vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect): QueryPromise<ListProjectsData, undefined>;

interface ApplyToProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApplyToProjectVariables): MutationRef<ApplyToProjectData, ApplyToProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ApplyToProjectVariables): MutationRef<ApplyToProjectData, ApplyToProjectVariables>;
  operationName: string;
}
export const applyToProjectRef: ApplyToProjectRef;

export function applyToProject(vars: ApplyToProjectVariables): MutationPromise<ApplyToProjectData, ApplyToProjectVariables>;
export function applyToProject(dc: DataConnect, vars: ApplyToProjectVariables): MutationPromise<ApplyToProjectData, ApplyToProjectVariables>;

interface GetDeveloperProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDeveloperProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDeveloperProfileData, undefined>;
  operationName: string;
}
export const getDeveloperProfileRef: GetDeveloperProfileRef;

export function getDeveloperProfile(): QueryPromise<GetDeveloperProfileData, undefined>;
export function getDeveloperProfile(dc: DataConnect): QueryPromise<GetDeveloperProfileData, undefined>;

