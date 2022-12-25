import { combinePostsData } from '..';
import { CommentsMock } from '../../mocks/comments';
import { PostsMock } from '../../mocks/posts';
import { UsersMock } from '../../mocks/users';

describe('test combine function', () => {
  it('check function results', () => {
    expect(
      combinePostsData({
        posts: PostsMock,
        users: UsersMock,
        comments: CommentsMock,
      }),
    ).toMatchInlineSnapshot(`
      [
        {
          "body": "Post 1",
          "comments": [
            "laudantium enim quasi est quidem magnam voluptate ipsam eos
      tempora quo necessitatibus
      dolor quam autem quasi
      reiciendis et nam sapiente accusantium",
            "est natus enim nihil est dolore omnis voluptatem numquam
      et omnis occaecati quod ullam at
      voluptatem error expedita pariatur
      nihil sint nostrum voluptatem reiciendis et",
            "quia molestiae reprehenderit quasi aspernatur
      aut expedita occaecati aliquam eveniet laudantium
      omnis quibusdam delectus saepe quia accusamus maiores nam est
      cum et ducimus et vero voluptates excepturi deleniti ratione",
            "non et atque
      occaecati deserunt quas accusantium unde odit nobis qui voluptatem
      quia voluptas consequuntur itaque dolor
      et qui rerum deleniti ut occaecati",
            "harum non quasi et ratione
      tempore iure ex voluptates in ratione
      harum architecto fugit inventore cupiditate
      voluptates magni quo et",
          ],
          "id": 1,
          "title": "Post 1",
          "userId": 1,
          "username": "Bret",
        },
        {
          "body": "Post 2",
          "comments": [
            "doloribus at sed quis culpa deserunt consectetur qui praesentium
      accusamus fugiat dicta
      voluptatem rerum ut voluptate autem
      voluptatem repellendus aspernatur dolorem in",
            "maiores sed dolores similique labore et inventore et
      quasi temporibus esse sunt id et
      eos voluptatem aliquam
      aliquid ratione corporis molestiae mollitia quia et magnam dolor",
            "ut voluptatem corrupti velit
      ad voluptatem maiores
      et nisi velit vero accusamus maiores
      voluptates quia aliquid ullam eaque",
            "sapiente assumenda molestiae atque
      adipisci laborum distinctio aperiam et ab ut omnis
      et occaecati aspernatur odit sit rem expedita
      quas enim ipsam minus",
            "voluptate iusto quis nobis reprehenderit ipsum amet nulla
      quia quas dolores velit et non
      aut quia necessitatibus
      nostrum quaerat nulla et accusamus nisi facilis",
          ],
          "id": 2,
          "title": "Post 2",
          "userId": 2,
          "username": "Antonette",
        },
        {
          "body": "Post 3",
          "comments": [
            "ut dolorum nostrum id quia aut est
      fuga est inventore vel eligendi explicabo quis consectetur
      aut occaecati repellat id natus quo est
      ut blanditiis quia ut vel ut maiores ea",
            "expedita maiores dignissimos facilis
      ipsum est rem est fugit velit sequi
      eum odio dolores dolor totam
      occaecati ratione eius rem velit",
            "fuga eos qui dolor rerum
      inventore corporis exercitationem
      corporis cupiditate et deserunt recusandae est sed quis culpa
      eum maiores corporis et",
            "vel quae voluptas qui exercitationem
      voluptatibus unde sed
      minima et qui ipsam aspernatur
      expedita magnam laudantium et et quaerat ut qui dolorum",
            "nihil ut voluptates blanditiis autem odio dicta rerum
      quisquam saepe et est
      sunt quasi nemo laudantium deserunt
      molestias tempora quo quia",
          ],
          "id": 3,
          "title": "Post 3",
          "userId": 3,
          "username": "Samantha",
        },
        {
          "body": "Post 4",
          "comments": [
            "iste ut laborum aliquid velit facere itaque
      quo ut soluta dicta voluptate
      error tempore aut et
      sequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
            "consequatur necessitatibus totam sed sit dolorum
      recusandae quae odio excepturi voluptatum harum voluptas
      quisquam sit ad eveniet delectus
      doloribus odio qui non labore",
            "veritatis voluptates necessitatibus maiores corrupti
      neque et exercitationem amet sit et
      ullam velit sit magnam laborum
      magni ut molestias",
            "doloribus est illo sed minima aperiam
      ut dignissimos accusantium tempore atque et aut molestiae
      magni ut accusamus voluptatem quos ut voluptates
      quisquam porro sed architecto ut",
            "qui harum consequatur fugiat
      et eligendi perferendis at molestiae commodi ducimus
      doloremque asperiores numquam qui
      ut sit dignissimos reprehenderit tempore",
          ],
          "id": 4,
          "title": "Post 4",
          "userId": 4,
          "username": "Karianne",
        },
      ]
    `);
  });
});
