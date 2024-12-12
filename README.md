# React Native FlatList Performance Issue

This repository demonstrates a common performance problem in React Native when using `FlatList` with large datasets and complex item components. The bug causes significant UI freezes and jank, making the app unusable.  The solution involves optimizing rendering and minimizing unnecessary re-renders.

## Bug

The `FlatListBug.js` file contains the buggy implementation.  Observe the slow rendering and UI freezes when scrolling through the list.

## Solution

The `FlatListSolution.js` file shows how to resolve the performance issue.  Key improvements include using `keyExtractor`, `ItemSeparatorComponent`, and `getItemLayout` to optimize rendering, and using `React.memo` or `useMemo` to prevent unnecessary re-renders.