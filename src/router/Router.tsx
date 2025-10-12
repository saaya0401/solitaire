import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { PlayBoard } from "../components/pages/PlayBoard";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PlayBoard />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
})