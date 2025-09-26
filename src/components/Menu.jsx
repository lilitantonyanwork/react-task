import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu(){
    const menuData = [
        { title: "Demos",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Post",
            link: "",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Features",
            link: "",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Categories",
            link: "",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Shop",
            link: "",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Buy Now",
            link: "",
        },
    ];

    return(
        <ul className="menu">
            {menuData.map((item, id) =>(
                <MenuItem  key={id} item={item} />
            ))}
        </ul>
    )
}
export default Menu;