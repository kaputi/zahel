function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  value: number,
  seen: boolean[],
  path: number[]
) {
  if (seen[curr]) return false;
  seen[curr] = true;

  path.push(curr);
  if (curr === value) return true;

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, value, seen, path)) return true;
  }
  path.pop();
  return false;
}

export default function DepthFirstSearchGraphList(
  graph: WeightedAdjacencyList,
  source: number,
  value: number
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, value, seen, path);

  if (path.length === 0) return null;
  return path;
}
