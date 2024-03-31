export default function BreathFirstSearchGraphMatrix(
  graph: WeightedAdjacencyMatrix,
  source: number,
  value: number
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  while (q.length > 0) {
    const curr = q.shift() as number;
    if (curr === value) break;

    const adjs = graph[curr];
    for (let i = 0; i < graph.length; i++) {
      if (adjs[i] === 0) continue;
      if (seen[i]) continue;
      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  }

  // build path backwards
  let curr = value;
  const out = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (out.length) return [source].concat(out.reverse());

  return null;
}
