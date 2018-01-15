# Path

> `path`模块提供了处理文件和文件夹路径的工具

## path.basename(path[, ext])  

返回路径的最后一部分 

```
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'
```

## path.delimiter

返回系统分隔符

## path.dirname(path) 

返回路径的文件夹名字 

## path.extname(path)  

返回路径的扩展名

## path.format(pathObject)

将一个路径对象格式化为文件路径

```
path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
});
// Returns: 'C:\\path\\dir\\file.txt'
```

# path.isAbsolute(path) 

判断是否是绝对路径

```
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false
```

> window系统中，`/`和'\'都可以作为分隔符，但是`path`模块方法只会添加'\'

## path.join([...paths]) 

`path.join()`拼凑路径片段成一个标准路径。 

```
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// throws 'TypeError: Path must be a string. Received {}'
```

## path.normalize(path) 

- 格式化 `.` 和 `..`

```
path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// Returns: 'C:\\temp\\foo\\'
```

- 将分隔符格式化为系统默认的单一分隔符

```
path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
// Returns: 'C:\\temp\\foo\\bar'
```

## path.parse(path) 

返回路径信息 

```
path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

## path.relative(from, to) 

返回从`from`到`to`的相对路径

```
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// Returns: '..\\..\\impl\\bbb'
```

## path.resolve([...paths]) 

将路径片段格式化为绝对路径

```
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

> 格式化路径是从右至左，一旦形成绝对路径即返回不再后续操作；如果处理完所有的路径片段仍然没有生成绝对路径，那么当前工作目录会被使用。 

```
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```













