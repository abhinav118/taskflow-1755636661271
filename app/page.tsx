import { siteData, navigation } from '@/lib/data'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData.settings?.appName || 'TaskFlow'}</h1>
            <div className="flex space-x-6">
              {navigation.main?.map((item: any, index: number) => (
                <a key={index} href={item.route} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  {item.label}
                </a>
              )) || []}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome back!</h1>
          <p className="text-xl opacity-90">Here's what's happening with your tasks today</p>
          <button className="mt-8 btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.tasks?.map((task: any, index: number) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  task.priority === 'high' ? 'text-red-600' :
                  task.priority === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {task.priority} priority
                </span>
                <button className="btn btn-secondary text-sm">
                  View Details
                </button>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      <div className="container py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600 mt-2">Overview of all tasks and projects</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData.settings?.appName || 'TaskFlow'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}