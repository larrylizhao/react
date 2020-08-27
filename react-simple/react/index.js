class React {
    constructor(props) {

    }

    createElement(type, config, ...children) {
        return {
            type,
            config,
            children
        }
    }
}

const react = new React();

export default react;
