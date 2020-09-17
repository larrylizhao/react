class ReactDOM {

    render(element, container) {
        return container.appendChild(this._render(element));
    }

    //虚拟dom转为真实dom,并设置dom属性
    _render(element) {
        if(!element){
            return null;
        }

        if(typeof element === 'string') {
            return document.createTextNode(element);
        }

        const {type, config} = element;
        const dom = document.createElement(type);
        if(config) {
            Object.keys(config).forEach(key => {
                this.setAttribute(dom, key, config[key]);
            })
        }

        //递归渲染子节点
        element.children.forEach(child => {
            this.render(child, dom);
        })

        return dom
    }

    //设置属性
    setAttribute(dom, key, value) {
        if(key === 'className') {
            key = 'class';
        }

        if(/on\w+/.test(key)) {
            key = key.toLowerCase();
            dom[key] = value || '';
        } else if(key === 'style') {
            if(!value || typeof value === 'string') {
                dom.style.cssText = value || '';
            } else if(value && typeof value === 'object') {
                for(let key in value) {
                    if(typeof value[k] === 'number') {
                        dom.style[k] = value[k] + 'px';
                    }
                    else {
                        dom.style[k] = value[k];
                    }
                }
            }
        } else {
            if(key in dom) {
                dom[key] = value || '';
            }
            if(value) {
                dom.setAttribute(key, value);
            } else {
                dom.removeAttribute(key);
            }
        }

    }
}

const reactDOM = new ReactDOM();

export default reactDOM;
