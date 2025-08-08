// import { useState } from "react";
import { Votes } from "../../types/votes";
// import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
	votes: Votes;
	totalVotes: number;
	positiveRate: number;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
	return (
		<div className={css.container}>
			<p className={css.stat}>
				Good: <strong>{votes.good}</strong>
			</p>
			<p className={css.stat}>
				Neutral: <strong>{votes.neutral}</strong>
			</p>
			<p className={css.stat}>
				Bad: <strong>{votes.bad}</strong>
			</p>
			<p className={css.stat}>
				Total: <strong>{totalVotes}</strong>
			</p>
			<p className={css.stat}>
				Positive: <strong>{positiveRate}%</strong>
			</p>
		</div>
	);
};

export default VoteStats;
