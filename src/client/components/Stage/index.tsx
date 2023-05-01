import './Stage.css'

function Stage() {
  return (
    <div className="Stage">
      <div className="Stage--small">{APP_STAGE}</div>
      <div>v{APP_VERSION}</div>
    </div>
  )
}

export default Stage
