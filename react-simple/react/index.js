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

const react = new React();

export default react;
