export * from 'tnp-core';
import * as dateformat from 'dateformat';
import { CLASS } from 'typescript-class-helpers';
import { Log, Level } from 'ng2-logger';
import axios, { AxiosResponse } from 'axios';
import { walk } from 'lodash-walk-object';
import * as json5 from 'json5';
import * as stringify from 'json-stringify-safe';
import { JSON10, Circ } from 'json10';
import { diffChars } from 'diff';
import * as fuzzy from 'fuzzy';

// anuglar
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import {
  ViewChild, ViewContainerRef, OnDestroy,
  OnInit, Component, Input, AfterViewInit,
  EventEmitter,
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { FieldWrapper, FieldType, FormlyFieldConfig } from '@ngx-formly/core';


// sockets
import { Socket } from 'socket.io';
import { Server, Namespace } from 'socket.io';
import * as io from 'socket.io';
import * as ioClient from 'socket.io-client';

//#region @backend
import * as chokidar from 'chokidar';
import { IncCompiler } from 'incremental-compiler';
import * as tsfmt from 'typescript-formatter';
import { URL } from 'url';
import { describe, before, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import * as glob from 'glob';
import * as ps from 'ps-node';
import * as fkill from 'fkill';
import * as ncp from 'copy-paste';
import * as Task from 'task.js';
import isElevated from 'is-elevated';

// CLI UI
import * as inquirer from 'inquirer'
import * as inquirerAutocomplete from 'inquirer-autocomplete-prompt';
inquirer.registerPrompt('autocomplete', inquirerAutocomplete)

// express
import * as express from 'express';
import * as httpProxy from 'http-proxy';
import { Http2Server } from 'http2';
import * as  cors from 'cors';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as methodOverride from 'method-override';
import * as fileUpload from 'express-fileupload';

// database
import { generate } from 'password-hash';
import * as pass from 'passport';
import * as crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

// typeorm
import * as tsorm from 'typeorm'
import {
  Repository as TypeormRepository, EntityRepository
} from 'typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'typeorm';
import { EventSubscriber } from 'typeorm';
import { createConnections, getConnection } from 'typeorm';

//#endregion
