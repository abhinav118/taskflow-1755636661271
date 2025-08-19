interface TaskItemProps {
  checkable?: any
  editable?: any
  deletable?: any
}

export default function TaskItem({ checkable, editable, deletable }: TaskItemProps) {
  return (
    <div className="p-4 border-b hover:bg-gray-50 transition-colors">
      {/* TaskItem component content */}
    </div>
  )
}