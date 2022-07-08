export function ButtonSpinner({ loading, text }) {
    if (loading) {
        return (
            <button className="btn btn-primary mt-2" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="ps-2">Caregando...</span>
            </button>
        )
    } 

    return(
        <div className="form-group pt-2">
            <input type="submit" value={text} className="btn btn-primary"/>
        </div>
    )
}