import './Stage.css'

function Stage() {
  const version = APP_VERSION
  const stage = import.meta.env.VITE_STAGE

  console.log('ENV', import.meta.env)

  return (
    <div className="Stage">
      <div className="Stage--small">{stage}</div>
      <div>v{version}</div>
    </div>
  )
}

export default Stage
