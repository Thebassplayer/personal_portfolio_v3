import {defineCliConfig} from 'sanity/cli'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'

export default defineCliConfig({
  api: {
    projectId: '13xq9lab',
    dataset: 'production',
  },
  plugins: [
    dashboardTool({
      widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()],
    }),
  ],
})
