const BucketList = (props) => {
    const bkList = props.list;

    return (
        <div className="lists">
            {
                bkList.map((item, index) => {
                    return (<div className="list-item" key={index}>{item}</div>)
                })
            }
        </div>
    );
}

export default BucketList;