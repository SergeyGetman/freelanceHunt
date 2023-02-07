export const HockComponent = (Component ) => {
    return function withHockOrder({...props} ){
        return(
            <Component {...props}/>
        )
    }
}