// https://www.hackerrank.com/challenges/bear-and-steady-gene/problem
function steadyGene(gene) { const n = gene.length, each = n >> 2, toFind = getToFind(gene, each); let min = n;

    for (let l = 0, r = 0; r <= n; ) {
        if (found(toFind)) {
            min = Math.min(min, r - l);
            ++toFind[gene[l++]];
        } else {
            --toFind[gene[r++]];
        }
    }
    
    return min;
    
    }
    
    function found(toFind) { return Object.values(toFind).every(v => v <= 0); }
    
    function getToFind(gene, each) { const o = [...gene].reduce((acc, ch) => { ++acc[ch];
    
        return acc;
    }, {A: 0, C: 0, G: 0, T: 0});
    
    Object.keys(o).forEach(k => o[k] -= each);
    
    return o;
    
    }