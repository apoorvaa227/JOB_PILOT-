// NeetCode 250 Complete Question Bank
// Source: https://neetcode.io/practice/practice/neetcode250
// Total: 250 Questions across 18 Topics

export const DSA_TOPICS = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Binary Search",
  "Linked List",
  "Trees",
  "Heap / Priority Queue",
  "Backtracking",
  "Tries",
  "Graphs",
  "Advanced Graphs",
  "1-D Dynamic Programming",
  "2-D Dynamic Programming",
  "Greedy",
  "Intervals",
  "Math & Geometry",
  "Bit Manipulation",
];

export const DSA_QUESTIONS = {
  // ==================== ARRAYS & HASHING (22 questions) ====================
  "Arrays & Hashing": [
    { name: "Concatenation of Array", difficulty: "Easy", link: "https://leetcode.com/problems/concatenation-of-array/" },
    { name: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/" },
    { name: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
    { name: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
    { name: "Longest Common Prefix", difficulty: "Easy", link: "https://leetcode.com/problems/longest-common-prefix/" },
    { name: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
    { name: "Remove Element", difficulty: "Easy", link: "https://leetcode.com/problems/remove-element/" },
    { name: "Majority Element", difficulty: "Easy", link: "https://leetcode.com/problems/majority-element/" },
    { name: "Design HashSet", difficulty: "Easy", link: "https://leetcode.com/problems/design-hashset/" },
    { name: "Design HashMap", difficulty: "Easy", link: "https://leetcode.com/problems/design-hashmap/" },
    { name: "Sort an Array", difficulty: "Medium", link: "https://leetcode.com/problems/sort-an-array/" },
    { name: "Sort Colors", difficulty: "Medium", link: "https://leetcode.com/problems/sort-colors/" },
    { name: "Top K Frequent Elements", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
    { name: "Encode and Decode Strings", difficulty: "Medium", link: "https://leetcode.com/problems/encode-and-decode-strings/" },
    { name: "Range Sum Query 2D Immutable", difficulty: "Medium", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/" },
    { name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
    { name: "Valid Sudoku", difficulty: "Medium", link: "https://leetcode.com/problems/valid-sudoku/" },
    { name: "Longest Consecutive Sequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    { name: "Best Time to Buy And Sell Stock II", difficulty: "Medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
    { name: "Majority Element II", difficulty: "Medium", link: "https://leetcode.com/problems/majority-element-ii/" },
    { name: "Subarray Sum Equals K", difficulty: "Medium", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
    { name: "First Missing Positive", difficulty: "Hard", link: "https://leetcode.com/problems/first-missing-positive/" },
  ],

  // ==================== TWO POINTERS (13 questions) ====================
  "Two Pointers": [
    { name: "Reverse String", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-string/" },
    { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
    { name: "Valid Palindrome II", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome-ii/" },
    { name: "Merge Strings Alternately", difficulty: "Easy", link: "https://leetcode.com/problems/merge-strings-alternately/" },
    { name: "Merge Sorted Array", difficulty: "Easy", link: "https://leetcode.com/problems/merge-sorted-array/" },
    { name: "Remove Duplicates From Sorted Array", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
    { name: "Two Sum II Input Array Is Sorted", difficulty: "Medium", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
    { name: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
    { name: "4Sum", difficulty: "Medium", link: "https://leetcode.com/problems/4sum/" },
    { name: "Rotate Array", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-array/" },
    { name: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
    { name: "Boats to Save People", difficulty: "Medium", link: "https://leetcode.com/problems/boats-to-save-people/" },
    { name: "Trapping Rain Water", difficulty: "Hard", link: "https://leetcode.com/problems/trapping-rain-water/" },
  ],

  // ==================== SLIDING WINDOW (9 questions) ====================
  "Sliding Window": [
    { name: "Contains Duplicate II", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate-ii/" },
    { name: "Best Time to Buy And Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { name: "Longest Repeating Character Replacement", difficulty: "Medium", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
    { name: "Permutation In String", difficulty: "Medium", link: "https://leetcode.com/problems/permutation-in-string/" },
    { name: "Minimum Size Subarray Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
    { name: "Find K Closest Elements", difficulty: "Medium", link: "https://leetcode.com/problems/find-k-closest-elements/" },
    { name: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/" },
    { name: "Sliding Window Maximum", difficulty: "Hard", link: "https://leetcode.com/problems/sliding-window-maximum/" },
  ],

  // ==================== STACK (14 questions) ====================
  "Stack": [
    { name: "Baseball Game", difficulty: "Easy", link: "https://leetcode.com/problems/baseball-game/" },
    { name: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
    { name: "Implement Stack Using Queues", difficulty: "Easy", link: "https://leetcode.com/problems/implement-stack-using-queues/" },
    { name: "Implement Queue using Stacks", difficulty: "Easy", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
    { name: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/" },
    { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
    { name: "Asteroid Collision", difficulty: "Medium", link: "https://leetcode.com/problems/asteroid-collision/" },
    { name: "Daily Temperatures", difficulty: "Medium", link: "https://leetcode.com/problems/daily-temperatures/" },
    { name: "Online Stock Span", difficulty: "Medium", link: "https://leetcode.com/problems/online-stock-span/" },
    { name: "Car Fleet", difficulty: "Medium", link: "https://leetcode.com/problems/car-fleet/" },
    { name: "Simplify Path", difficulty: "Medium", link: "https://leetcode.com/problems/simplify-path/" },
    { name: "Decode String", difficulty: "Medium", link: "https://leetcode.com/problems/decode-string/" },
    { name: "Maximum Frequency Stack", difficulty: "Hard", link: "https://leetcode.com/problems/maximum-frequency-stack/" },
    { name: "Largest Rectangle In Histogram", difficulty: "Hard", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
  ],

  // ==================== BINARY SEARCH (14 questions) ====================
  "Binary Search": [
    { name: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/" },
    { name: "Search Insert Position", difficulty: "Easy", link: "https://leetcode.com/problems/search-insert-position/" },
    { name: "Guess Number Higher Or Lower", difficulty: "Easy", link: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
    { name: "Sqrt(x)", difficulty: "Easy", link: "https://leetcode.com/problems/sqrtx/" },
    { name: "Search a 2D Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
    { name: "Koko Eating Bananas", difficulty: "Medium", link: "https://leetcode.com/problems/koko-eating-bananas/" },
    { name: "Capacity to Ship Packages Within D Days", difficulty: "Medium", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
    { name: "Find Minimum In Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { name: "Search In Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { name: "Search In Rotated Sorted Array II", difficulty: "Medium", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
    { name: "Time Based Key Value Store", difficulty: "Medium", link: "https://leetcode.com/problems/time-based-key-value-store/" },
    { name: "Split Array Largest Sum", difficulty: "Hard", link: "https://leetcode.com/problems/split-array-largest-sum/" },
    { name: "Median of Two Sorted Arrays", difficulty: "Hard", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { name: "Find in Mountain Array", difficulty: "Hard", link: "https://leetcode.com/problems/find-in-mountain-array/" },
  ],

  // ==================== LINKED LIST (14 questions) ====================
  "Linked List": [
    { name: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
    { name: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
    { name: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
    { name: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/" },
    { name: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { name: "Copy List With Random Pointer", difficulty: "Medium", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
    { name: "Add Two Numbers", difficulty: "Medium", link: "https://leetcode.com/problems/add-two-numbers/" },
    { name: "Find The Duplicate Number", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
    { name: "Reverse Linked List II", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
    { name: "Design Circular Queue", difficulty: "Medium", link: "https://leetcode.com/problems/design-circular-queue/" },
    { name: "LRU Cache", difficulty: "Medium", link: "https://leetcode.com/problems/lru-cache/" },
    { name: "LFU Cache", difficulty: "Hard", link: "https://leetcode.com/problems/lfu-cache/" },
    { name: "Merge K Sorted Lists", difficulty: "Hard", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { name: "Reverse Nodes In K Group", difficulty: "Hard", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
  ],

  // ==================== TREES (23 questions) ====================
  "Trees": [
    { name: "Binary Tree Inorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
    { name: "Binary Tree Preorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
    { name: "Binary Tree Postorder Traversal", difficulty: "Easy", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
    { name: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
    { name: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { name: "Diameter of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
    { name: "Balanced Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/balanced-binary-tree/" },
    { name: "Same Tree", difficulty: "Easy", link: "https://leetcode.com/problems/same-tree/" },
    { name: "Subtree of Another Tree", difficulty: "Easy", link: "https://leetcode.com/problems/subtree-of-another-tree/" },
    { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { name: "Insert into a Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
    { name: "Delete Node in a BST", difficulty: "Medium", link: "https://leetcode.com/problems/delete-node-in-a-bst/" },
    { name: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { name: "Binary Tree Right Side View", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
    { name: "Construct Quad Tree", difficulty: "Medium", link: "https://leetcode.com/problems/construct-quad-tree/" },
    { name: "Count Good Nodes In Binary Tree", difficulty: "Medium", link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
    { name: "Validate Binary Search Tree", difficulty: "Medium", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
    { name: "Kth Smallest Element In a Bst", difficulty: "Medium", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
    { name: "Construct Binary Tree From Preorder And Inorder Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
    { name: "House Robber III", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-iii/" },
    { name: "Delete Leaves With a Given Value", difficulty: "Medium", link: "https://leetcode.com/problems/delete-leaves-with-a-given-value/" },
    { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { name: "Serialize And Deserialize Binary Tree", difficulty: "Hard", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  ],

  // ==================== HEAP / PRIORITY QUEUE (12 questions) ====================
  "Heap / Priority Queue": [
    { name: "Kth Largest Element In a Stream", difficulty: "Easy", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
    { name: "Last Stone Weight", difficulty: "Easy", link: "https://leetcode.com/problems/last-stone-weight/" },
    { name: "K Closest Points to Origin", difficulty: "Medium", link: "https://leetcode.com/problems/k-closest-points-to-origin/" },
    { name: "Kth Largest Element In An Array", difficulty: "Medium", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { name: "Task Scheduler", difficulty: "Medium", link: "https://leetcode.com/problems/task-scheduler/" },
    { name: "Design Twitter", difficulty: "Medium", link: "https://leetcode.com/problems/design-twitter/" },
    { name: "Single Threaded CPU", difficulty: "Medium", link: "https://leetcode.com/problems/single-threaded-cpu/" },
    { name: "Reorganize String", difficulty: "Medium", link: "https://leetcode.com/problems/reorganize-string/" },
    { name: "Longest Happy String", difficulty: "Medium", link: "https://leetcode.com/problems/longest-happy-string/" },
    { name: "Car Pooling", difficulty: "Medium", link: "https://leetcode.com/problems/car-pooling/" },
    { name: "Find Median From Data Stream", difficulty: "Hard", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
    { name: "IPO", difficulty: "Hard", link: "https://leetcode.com/problems/ipo/" },
  ],

  // ==================== BACKTRACKING (17 questions) ====================
  "Backtracking": [
    { name: "Sum of All Subsets XOR Total", difficulty: "Easy", link: "https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
    { name: "Subsets", difficulty: "Medium", link: "https://leetcode.com/problems/subsets/" },
    { name: "Combination Sum", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum/" },
    { name: "Combination Sum II", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-ii/" },
    { name: "Combinations", difficulty: "Medium", link: "https://leetcode.com/problems/combinations/" },
    { name: "Permutations", difficulty: "Medium", link: "https://leetcode.com/problems/permutations/" },
    { name: "Subsets II", difficulty: "Medium", link: "https://leetcode.com/problems/subsets-ii/" },
    { name: "Permutations II", difficulty: "Medium", link: "https://leetcode.com/problems/permutations-ii/" },
    { name: "Generate Parentheses", difficulty: "Medium", link: "https://leetcode.com/problems/generate-parentheses/" },
    { name: "Word Search", difficulty: "Medium", link: "https://leetcode.com/problems/word-search/" },
    { name: "Palindrome Partitioning", difficulty: "Medium", link: "https://leetcode.com/problems/palindrome-partitioning/" },
    { name: "Letter Combinations of a Phone Number", difficulty: "Medium", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { name: "Matchsticks to Square", difficulty: "Medium", link: "https://leetcode.com/problems/matchsticks-to-square/" },
    { name: "Partition to K Equal Sum Subsets", difficulty: "Medium", link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/" },
    { name: "N Queens", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens/" },
    { name: "N Queens II", difficulty: "Hard", link: "https://leetcode.com/problems/n-queens-ii/" },
    { name: "Word Break II", difficulty: "Hard", link: "https://leetcode.com/problems/word-break-ii/" },
  ],

  // ==================== TRIES (4 questions) ====================
  "Tries": [
    { name: "Implement Trie Prefix Tree", difficulty: "Medium", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { name: "Design Add And Search Words Data Structure", difficulty: "Medium", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
    { name: "Extra Characters in a String", difficulty: "Medium", link: "https://leetcode.com/problems/extra-characters-in-a-string/" },
    { name: "Word Search II", difficulty: "Hard", link: "https://leetcode.com/problems/word-search-ii/" },
  ],

  // ==================== GRAPHS (21 questions) ====================
  "Graphs": [
    { name: "Island Perimeter", difficulty: "Easy", link: "https://leetcode.com/problems/island-perimeter/" },
    { name: "Verifying An Alien Dictionary", difficulty: "Easy", link: "https://leetcode.com/problems/verifying-an-alien-dictionary/" },
    { name: "Find the Town Judge", difficulty: "Easy", link: "https://leetcode.com/problems/find-the-town-judge/" },
    { name: "Number of Islands", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-islands/" },
    { name: "Max Area of Island", difficulty: "Medium", link: "https://leetcode.com/problems/max-area-of-island/" },
    { name: "Clone Graph", difficulty: "Medium", link: "https://leetcode.com/problems/clone-graph/" },
    { name: "Walls And Gates", difficulty: "Medium", link: "https://leetcode.com/problems/walls-and-gates/" },
    { name: "Rotting Oranges", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
    { name: "Pacific Atlantic Water Flow", difficulty: "Medium", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
    { name: "Surrounded Regions", difficulty: "Medium", link: "https://leetcode.com/problems/surrounded-regions/" },
    { name: "Open The Lock", difficulty: "Medium", link: "https://leetcode.com/problems/open-the-lock/" },
    { name: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
    { name: "Course Schedule II", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/" },
    { name: "Graph Valid Tree", difficulty: "Medium", link: "https://leetcode.com/problems/graph-valid-tree/" },
    { name: "Course Schedule IV", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-iv/" },
    { name: "Number of Connected Components In An Undirected Graph", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
    { name: "Redundant Connection", difficulty: "Medium", link: "https://leetcode.com/problems/redundant-connection/" },
    { name: "Accounts Merge", difficulty: "Medium", link: "https://leetcode.com/problems/accounts-merge/" },
    { name: "Evaluate Division", difficulty: "Medium", link: "https://leetcode.com/problems/evaluate-division/" },
    { name: "Minimum Height Trees", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-height-trees/" },
    { name: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/" },
  ],

  // ==================== ADVANCED GRAPHS (10 questions) ====================
  "Advanced Graphs": [
    { name: "Path with Minimum Effort", difficulty: "Medium", link: "https://leetcode.com/problems/path-with-minimum-effort/" },
    { name: "Network Delay Time", difficulty: "Medium", link: "https://leetcode.com/problems/network-delay-time/" },
    { name: "Reconstruct Itinerary", difficulty: "Hard", link: "https://leetcode.com/problems/reconstruct-itinerary/" },
    { name: "Min Cost to Connect All Points", difficulty: "Medium", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
    { name: "Swim In Rising Water", difficulty: "Hard", link: "https://leetcode.com/problems/swim-in-rising-water/" },
    { name: "Alien Dictionary", difficulty: "Hard", link: "https://leetcode.com/problems/alien-dictionary/" },
    { name: "Cheapest Flights Within K Stops", difficulty: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
    { name: "Find Critical and Pseudo Critical Edges in Minimum Spanning Tree", difficulty: "Hard", link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/" },
    { name: "Build a Matrix With Conditions", difficulty: "Hard", link: "https://leetcode.com/problems/build-a-matrix-with-conditions/" },
    { name: "Greatest Common Divisor Traversal", difficulty: "Hard", link: "https://leetcode.com/problems/greatest-common-divisor-traversal/" },
  ],

  // ==================== 1-D DYNAMIC PROGRAMMING (17 questions) ====================
  "1-D Dynamic Programming": [
    { name: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
    { name: "Min Cost Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
    { name: "N-th Tribonacci Number", difficulty: "Easy", link: "https://leetcode.com/problems/n-th-tribonacci-number/" },
    { name: "House Robber", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber/" },
    { name: "House Robber II", difficulty: "Medium", link: "https://leetcode.com/problems/house-robber-ii/" },
    { name: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { name: "Palindromic Substrings", difficulty: "Medium", link: "https://leetcode.com/problems/palindromic-substrings/" },
    { name: "Decode Ways", difficulty: "Medium", link: "https://leetcode.com/problems/decode-ways/" },
    { name: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/" },
    { name: "Maximum Product Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-product-subarray/" },
    { name: "Word Break", difficulty: "Medium", link: "https://leetcode.com/problems/word-break/" },
    { name: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
    { name: "Partition Equal Subset Sum", difficulty: "Medium", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
    { name: "Combination Sum IV", difficulty: "Medium", link: "https://leetcode.com/problems/combination-sum-iv/" },
    { name: "Perfect Squares", difficulty: "Medium", link: "https://leetcode.com/problems/perfect-squares/" },
    { name: "Integer Break", difficulty: "Medium", link: "https://leetcode.com/problems/integer-break/" },
    { name: "Stone Game III", difficulty: "Hard", link: "https://leetcode.com/problems/stone-game-iii/" },
  ],

  // ==================== 2-D DYNAMIC PROGRAMMING (16 questions) ====================
  "2-D Dynamic Programming": [
    { name: "Unique Paths", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths/" },
    { name: "Unique Paths II", difficulty: "Medium", link: "https://leetcode.com/problems/unique-paths-ii/" },
    { name: "Minimum Path Sum", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-path-sum/" },
    { name: "Longest Common Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-common-subsequence/" },
    { name: "Last Stone Weight II", difficulty: "Medium", link: "https://leetcode.com/problems/last-stone-weight-ii/" },
    { name: "Best Time to Buy And Sell Stock With Cooldown", difficulty: "Medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
    { name: "Coin Change II", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change-ii/" },
    { name: "Target Sum", difficulty: "Medium", link: "https://leetcode.com/problems/target-sum/" },
    { name: "Interleaving String", difficulty: "Medium", link: "https://leetcode.com/problems/interleaving-string/" },
    { name: "Stone Game", difficulty: "Medium", link: "https://leetcode.com/problems/stone-game/" },
    { name: "Stone Game II", difficulty: "Medium", link: "https://leetcode.com/problems/stone-game-ii/" },
    { name: "Longest Increasing Path In a Matrix", difficulty: "Hard", link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
    { name: "Distinct Subsequences", difficulty: "Hard", link: "https://leetcode.com/problems/distinct-subsequences/" },
    { name: "Edit Distance", difficulty: "Medium", link: "https://leetcode.com/problems/edit-distance/" },
    { name: "Burst Balloons", difficulty: "Hard", link: "https://leetcode.com/problems/burst-balloons/" },
    { name: "Regular Expression Matching", difficulty: "Hard", link: "https://leetcode.com/problems/regular-expression-matching/" },
  ],

  // ==================== GREEDY (14 questions) ====================
  "Greedy": [
    { name: "Lemonade Change", difficulty: "Easy", link: "https://leetcode.com/problems/lemonade-change/" },
    { name: "Maximum Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
    { name: "Maximum Sum Circular Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
    { name: "Longest Turbulent Subarray", difficulty: "Medium", link: "https://leetcode.com/problems/longest-turbulent-subarray/" },
    { name: "Jump Game", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game/" },
    { name: "Jump Game II", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game-ii/" },
    { name: "Jump Game VII", difficulty: "Medium", link: "https://leetcode.com/problems/jump-game-vii/" },
    { name: "Gas Station", difficulty: "Medium", link: "https://leetcode.com/problems/gas-station/" },
    { name: "Hand of Straights", difficulty: "Medium", link: "https://leetcode.com/problems/hand-of-straights/" },
    { name: "Dota2 Senate", difficulty: "Medium", link: "https://leetcode.com/problems/dota2-senate/" },
    { name: "Merge Triplets to Form Target Triplet", difficulty: "Medium", link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/" },
    { name: "Partition Labels", difficulty: "Medium", link: "https://leetcode.com/problems/partition-labels/" },
    { name: "Valid Parenthesis String", difficulty: "Medium", link: "https://leetcode.com/problems/valid-parenthesis-string/" },
    { name: "Candy", difficulty: "Hard", link: "https://leetcode.com/problems/candy/" },
  ],

  // ==================== INTERVALS (7 questions) ====================
  "Intervals": [
    { name: "Insert Interval", difficulty: "Medium", link: "https://leetcode.com/problems/insert-interval/" },
    { name: "Merge Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
    { name: "Non Overlapping Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
    { name: "Meeting Rooms", difficulty: "Easy", link: "https://leetcode.com/problems/meeting-rooms/" },
    { name: "Meeting Rooms II", difficulty: "Medium", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
    { name: "Meeting Rooms III", difficulty: "Hard", link: "https://leetcode.com/problems/meeting-rooms-iii/" },
    { name: "Minimum Interval to Include Each Query", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/" },
  ],

  // ==================== MATH & GEOMETRY (13 questions) ====================
  "Math & Geometry": [
    { name: "Excel Sheet Column Title", difficulty: "Easy", link: "https://leetcode.com/problems/excel-sheet-column-title/" },
    { name: "Greatest Common Divisor of Strings", difficulty: "Easy", link: "https://leetcode.com/problems/greatest-common-divisor-of-strings/" },
    { name: "Insert Greatest Common Divisors in Linked List", difficulty: "Medium", link: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/" },
    { name: "Transpose Matrix", difficulty: "Easy", link: "https://leetcode.com/problems/transpose-matrix/" },
    { name: "Rotate Image", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-image/" },
    { name: "Spiral Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/spiral-matrix/" },
    { name: "Set Matrix Zeroes", difficulty: "Medium", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
    { name: "Happy Number", difficulty: "Easy", link: "https://leetcode.com/problems/happy-number/" },
    { name: "Plus One", difficulty: "Easy", link: "https://leetcode.com/problems/plus-one/" },
    { name: "Roman to Integer", difficulty: "Easy", link: "https://leetcode.com/problems/roman-to-integer/" },
    { name: "Pow(x, n)", difficulty: "Medium", link: "https://leetcode.com/problems/powx-n/" },
    { name: "Multiply Strings", difficulty: "Medium", link: "https://leetcode.com/problems/multiply-strings/" },
    { name: "Detect Squares", difficulty: "Medium", link: "https://leetcode.com/problems/detect-squares/" },
  ],

  // ==================== BIT MANIPULATION (10 questions) ====================
  "Bit Manipulation": [
    { name: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/" },
    { name: "Number of 1 Bits", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/" },
    { name: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/" },
    { name: "Add Binary", difficulty: "Easy", link: "https://leetcode.com/problems/add-binary/" },
    { name: "Reverse Bits", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-bits/" },
    { name: "Missing Number", difficulty: "Easy", link: "https://leetcode.com/problems/missing-number/" },
    { name: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" },
    { name: "Reverse Integer", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-integer/" },
    { name: "Bitwise AND of Numbers Range", difficulty: "Medium", link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" },
    { name: "Minimum Array End", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-array-end/" },
  ],
};

// Helper function to get random questions for selected topics
export function getRandomQuestionsForTopics(topics, questionsPerTopic = 1) {
  const selectedQuestions = [];

  topics.forEach((topic) => {
    const topicQuestions = DSA_QUESTIONS[topic];
    if (topicQuestions && topicQuestions.length > 0) {
      // Shuffle and pick random questions
      const shuffled = [...topicQuestions].sort(() => Math.random() - 0.5);
      const picked = shuffled.slice(0, questionsPerTopic);
      picked.forEach((q) => {
        selectedQuestions.push({
          ...q,
          topic,
        });
      });
    }
  });

  return selectedQuestions;
}

// Get total question count
export function getTotalQuestionCount() {
  let total = 0;
  Object.values(DSA_QUESTIONS).forEach((questions) => {
    total += questions.length;
  });
  return total;
}

// Get question count per topic
export function getQuestionCountByTopic() {
  const counts = {};
  Object.entries(DSA_QUESTIONS).forEach(([topic, questions]) => {
    counts[topic] = questions.length;
  });
  return counts;
}

// Get questions by difficulty
export function getQuestionsByDifficulty(difficulty) {
  const result = [];
  Object.entries(DSA_QUESTIONS).forEach(([topic, questions]) => {
    questions.forEach((q) => {
      if (q.difficulty === difficulty) {
        result.push({ ...q, topic });
      }
    });
  });
  return result;
}
