import { siteData, navigation } from '@/lib/data'

export default function CalendarPage() {
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
      <div className="container py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
          <p className="text-gray-600 mt-2">View tasks in calendar format</p>
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