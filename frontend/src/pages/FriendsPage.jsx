import { useQuery } from "@tanstack/react-query";
import { getUserFriends, getRecommendedUsers } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const { data: friends = [] } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const { data: recommendedUsers = [] } = useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: getRecommendedUsers,
  });

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
        {friends.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        ) : (
          <NoFriendsFound />
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Add Friends</h2>
        {recommendedUsers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedUsers.map((user) => (
              <FriendCard key={user._id} friend={user} />
            ))}
          </div>
        ) : (
          <p>No users found to recommend.</p>
        )}
      </section>
    </div>
  );
};

export default FriendsPage;
