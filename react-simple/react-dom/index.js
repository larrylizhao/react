class ReactDOM {

    render(element, container) {
        return container.appendChild(this._render(element));
    }

    //虚拟dom转为真实dom,并设置dom属性
    _render(element) {
        if(!element || typeof element === 'boolean'){
            return null;
        }

        // 1. 如果element是字符串
        if(typeof element === 'string') {
            // 创建文本节点
            return document.createTextNode(element);
        }

        // 2. 处理函数组件
        if (typeof element.type === 'function') {
            // 1. 创建组件

        }

        // 3. 否则就是虚拟DOM对象
        const {type, config} = element;

        // 由虚拟DOM创建真实DOM，并设置属性
        const dom = document.createElement(type);
        if(config) {
            Object.keys(config).forEach(key => {
                this.setAttribute(dom, key, config[key]);
            })
        }

        //递归渲染子节点
        if(element.children) {
            element.children.forEach(child => {
                this.render(child, dom);
            })
        }

        // 返回创建好的真实DOM
        return dom
    }

    // 设置dom节点属性
    setAttribute(dom, key, value) {
        if(key === 'className') {
            key = 'class';
        }

        // 绑定event
        if(/on\w+/.test(key)) {
            key = key.toLowerCase();
            dom[key] = value || '';
        } else if(key === 'style') { // 设置style
            if(!value || typeof value === 'string') {
                dom.style.cssText = value || '';
            } else if(value && typeof value === 'object') { //其他style属性
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
