import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RenderCampsite from "../features/campsites/RenderCampsite";
import { COMMENTS } from "../shared/comments";

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;

  const [comments, setComments] = useState(COMMENTS);

  return (
    <FlatList
      data={comments.filter((comment) => comment.campsiteId === campsite.id)}
    />
  );
};

export default CampsiteInfoScreen;
