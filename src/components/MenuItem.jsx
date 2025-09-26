function MenuItem({item}){
    const hasChildren = item.children && item.children.length > 0;
    return(
        <li  className={hasChildren ? "menu-item has-sub" : "menu-item"}>
            <a className='menu-item-link' href={item.link}>{item.title}</a>
            {hasChildren && (
                <ul className='menu-sub'>
                    {item.children.map((child, id) => (
                        <MenuItem key={id} item={child}/>
                        ))}
                </ul>
            )}

        </li>
    )
}
export default  MenuItem;