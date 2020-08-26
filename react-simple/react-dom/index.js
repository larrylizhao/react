class ReactDOM {
    render(vnode, container) {
        if(!vnode){
            return null;
        }

        if(typeof vnode === 'string') {
            const textNode = document.createTextNode(vnode);
            return container.appendChild(textNode);
        }

        const {tag, attrs} = vnode;
        const dom = document.createElement(tag);
        if(attrs) {
            Object.keys(attrs).forEach(key => {
                this.setAttribute(dom, key, attrs[key]);
            })
        }

        //递归渲染子节点
        vnode.childrens.forEach(child => {
            this.render(child, dom);
        })

        return container.appendChild(dom);
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
