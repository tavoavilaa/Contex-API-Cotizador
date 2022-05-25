import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <>
	<div className="cssload-loader">
		<div className="cssload-line"></div>
		<div className="cssload-line"></div>
		<div className="cssload-line"></div>
		<div className="cssload-line"></div>
		<div className="cssload-line"></div>
		<div className="cssload-line"></div>
		<div className="cssload-subline"></div>
		<div className="cssload-subline"></div>
		<div className="cssload-subline"></div>
		<div className="cssload-subline"></div>
		<div className="cssload-subline"></div>
		<div className="cssload-loader-circle-1"><div className="cssload-loader-circle-2"></div></div>
		<div className="cssload-needle"></div>
		<div className="cssload-loading">Cargando...</div>
	</div>
</>
  )
}

export default Spinner