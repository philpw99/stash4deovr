import React from "react";
import * as GQL from "src/core/generated-graphql";
import { useStudioFilterHook } from "src/core/studios";
import { PerformerList } from "src/components/Performers/PerformerList";
import { StudiosCriterion } from "src/models/list-filter/criteria/studios";

interface IStudioPerformersPanel {
  active: boolean;
  studio: GQL.StudioDataFragment;
}

export const StudioPerformersPanel: React.FC<IStudioPerformersPanel> = ({
  active,
  studio,
}) => {
  const studioCriterion = new StudiosCriterion();
  studioCriterion.value = {
    items: [{ id: studio.id!, label: studio.name || `Studio ${studio.id}` }],
    excluded: [],
    depth: 0,
  };

  const extraCriteria = {
    scenes: [studioCriterion],
    images: [studioCriterion],
    galleries: [studioCriterion],
    movies: [studioCriterion],
  };

  const filterHook = useStudioFilterHook(studio);

  return (
    <PerformerList
      filterHook={filterHook}
      extraCriteria={extraCriteria}
      alterQuery={active}
    />
  );
};
