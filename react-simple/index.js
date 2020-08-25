class React {
    constructor(props) {

    }

    createElement(tag, attrs, ...childrens) {
        return {
            tag,
            attrs,
            childrens
        }
    }
}

const ele = (
    <div className='active' title='123'>
        Hello <span>React</span>
    </div>
);
