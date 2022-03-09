var allPathsSourceTarget = function(graph) {
    let currentNode = 0;
    let currentPath = [];
    let searchedElement = graph.length-1;
    let paths = [];
    
    findPath(graph, currentNode, currentPath, searchedElement, paths);
    
    return paths;
};


var findPath = function(graph, currentNode, currentPath, searchedElement, paths) {    
    currentPath.push(currentNode);

    if(currentNode === searchedElement) {
        paths.push(currentPath.slice());
        return;
    }    
    
    for(let node of graph[currentNode]) {
        findPath(graph, node, currentPath, searchedElement, paths);
        currentPath.pop();
    }
}