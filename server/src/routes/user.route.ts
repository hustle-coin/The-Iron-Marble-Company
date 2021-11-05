import { Router } from 'express';
import { TokenService } from '../service/token.service';
import { UserService } from '../service/user.service';
import { Cookies } from '../model/request.model';
import { HttpError } from '../model/error.model';
import { checkSpecialCharacters } from '../validation/input.validation';

export const router = Router();

const tokenService = TokenService.get();
const userService = UserService.get();

router.get('/', (req, res, next) => {
  try {
    const cookies: Cookies = req.cookies;
    if (!cookies.access_token) {
      next(new HttpError(401, 'access token is missing'));
      return;
    }
    const accessToken = tokenService.parseAccessToken(cookies.access_token);
    const user = userService.getUserById(accessToken.id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.post('/charactername', (req, res, next) => {
  try {
    const cookies: Cookies = req.cookies;
    const name = req.body.value;
    if (!checkSpecialCharacters(name)) {
      next(new HttpError(400, 'invalid character name'));
      return;
    }
    if (!cookies.access_token) {
      next(new HttpError(401, 'access token is missing'));
      return;
    }
    const accessToken = tokenService.parseAccessToken(cookies.access_token);
    userService.setCharacterName(accessToken.id, name);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});
