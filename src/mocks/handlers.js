import { rest } from "msw";

const baseURL = "https://artiza-api-fbf88e8a2da5.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "Linnea",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/delcgfh9h/image/upload/v1/media/images/IMG_0736_snkmsl",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
