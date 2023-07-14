import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    projectId: '13xq9lab',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
    title: 'Production Workspace',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '13xq9lab',
    dataset: 'development',
    name: 'staging-workspace',
    basePath: '/development',
    title: 'Staging Workspace',
    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
