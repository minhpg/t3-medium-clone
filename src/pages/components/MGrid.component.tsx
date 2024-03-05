"use client";

import React, { useState, useEffect, ReactNode } from "react";

const GRID_ROWS = 12;
const GRID_COLS = 22;
export default function MGrid(): ReactNode {
  const createInitialGrid = (): boolean[][] => {
    return Array.from({ length: GRID_COLS }, () =>
      Array.from({ length: GRID_ROWS }, () =>
        Math.random() > 0.5 ? false : true,
      ),
    );
  };

  const [grid, setGrid] = useState<boolean[][]>(createInitialGrid());

  useEffect(() => {
    const addRandomTile = () => {
      const arr: any = [...grid];

      const randomColIndex = Math.floor(Math.random() * (GRID_COLS - 1));
      const randomRowIndex = Math.floor(Math.random() * (GRID_ROWS - 1));

      arr[randomColIndex][randomRowIndex] =
        !arr[randomColIndex][randomRowIndex];

      setGrid(arr);
    };

    const intervalId = setInterval(addRandomTile, 100);

    return () => clearInterval(intervalId);
  }, [grid]);

  return (
    <div className="absolute right-0 z-0 hidden h-full flex-col overflow-hidden md:flex">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((isVisible, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex items-center justify-center  border-black px-2`}
            >
              <span className="h-6 w-6 text-xl">{isVisible ? "M" : ""}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
