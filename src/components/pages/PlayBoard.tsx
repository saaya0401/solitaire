import { FC, memo } from "react";

export const PlayBoard: FC = memo(() => {
    const dummyCards = Array.from({ length: 7 }, (_, i) => i + 1);
    return (
        <p>プレイボードです</p>
    );
});