
import classes from "./Layout.module.css";

const Layout = (props) => {
        return(
            <>
           <div>Toolbar, SideDrawer, backDrop</div>
           <main className={classes.Content}>{props.children}</main>
            </>
        )
}
export default Layout;