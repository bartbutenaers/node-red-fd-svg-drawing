// Node-RED Network Diagram Node - this code runs in Node-RED

module.exports = function (RED) {
   const Svgson = require('svgson')

  // Instantiate the Node-RED node, 'this' is the node being constructed
  // and config contains the values set by the user in the flow editor.
  function FdSvgDrawingNode(config) {
    const fd = RED.nodes.getNode(config.fd) // get a handle onto FlexDash
    RED.nodes.createNode(this, config)
    if (!fd) return // not much we can do, wait for the next deploy...

    // initWidget ensures that a widget exists in FD and initializes its props with the
    // second arg. The third arg is the kind of widget to create, if it doesn't exist.
    Object.assign(config, { svg_source: "" })
    if (config.title === undefined || config.title === null) config.title = config.name
    fd.initWidget(this, config, 'SvgDrawing')

    // handle flow input messages
    this.on("input", msg => {
        const topic = msg.topic
        const payload = msg.payload

        switch(topic) {
            case "add_element": // Add elements, or replace them if they already exist
                /*if (!payload.elementType) {
                    //TODO logError("Invalid payload. A property named .elementType is not specified (msg._msgid = '" + _msgid + "')");
                    return;
                }
                
                var parentElements = null;

                if (payload.parentSelector || payload.parentElementId) {
                    selector = payload.parentSelector || "#" + payload.parentElementId;
                    parentElements = $scope.rootDiv.querySelectorAll(selector);
                }
                
                if (!parentElements || !parentElements.length) {
                    // When no parent elements have been specified, add the SVG element directly under the SVG element
                    parentElements = [$scope.svg];
                }
                
                // It is not possible to add elements with the same id to multiple parent elements
                if (parentElements.length > 1 && payload.elementId) {
                    //TODO logError("When multiple parent SVG elements are specified, it is not allowed to specify an .elementId (msg._msgid = '" + _msgid + "')");
                    return;
                }
            
                // Create a new SVG element (of the specified type) to every specified parent SVG element
                parentElements.forEach(function(parentElement){
                    var newElement;
                    
                    if (payload.foreignElement == true) {
                        newElement = document.createElement(payload.elementType);
                    }
                    else {
                        newElement = document.createElementNS("http://www.w3.org/2000/svg", payload.elementType);
                    }
                    
                    if (payload.elementId) {
                        newElement.setAttribute("id", payload.elementId);
                    }
                    
                    if (payload.elementAttributes) {
                        for (const [key, value] of Object.entries(payload.elementAttributes)) {
                            newElement.setAttribute(key, value);
                        }
                    }
                    
                    if (payload.elementStyleAttributes) {
                        var style = "";
                        // Convert the Javascript object to a style formatted string
                        for (const [key, value] of Object.entries(payload.elementStyleAttributes)) {
                            style += key;
                            style += ":";
                            style += value;
                            style += "; ";
                        }

                        if (style.trim() !== "") {
                           newElement.setAttribute("style", style);
                        }
                    }
                    
                    if (payload.textContent) {
                        setTextContent(newElement, payload.textContent);
                    }
                    
                    // In the "Events" tabsheet might be a CSS selector that matches this new element. This means that the 
                    // new element might need to get event handlers automatically.  To make sure we ONLY apply those handlers 
                    // to this new element, we add the element to a dummy parent which only has one child (i.e. this new element).
                    var dummyParent = document.createElement("div");
                    dummyParent.appendChild(newElement);
                    applyEventHandlers(dummyParent);
                    
                    parentElement.appendChild(newElement);
                })
                */
                break;

        default:
          throw "Unsupported command '" + topic + "' in topic"
      }

    })

  }

  RED.nodes.registerType("fd-svg-drawing", FdSvgDrawingNode)
}
